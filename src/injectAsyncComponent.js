import React, { Component } from "react";
// import injectAsyncReducer from "./storeEnhancers/resetRuducer";
import { combineReducers } from "redux";
import store from "./createStore";

let orginReducer = [];
export default function asyncComponent(
  importComponent,
  reducers = [],
  sagas = []
) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = { component: null };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      // console.log('reducers', reducers);
      const state = store.getState();
      console.log("state", state);
      await this.processReducer(reducers);
      this.setState({ component: component });
    }

    processReducer(reducer) {
      // console.log()
      // function getAsync
      if (Array.isArray(reducer)) {
        return Promise.all(reducer.map(r => this.processReducer(r)));
      } else if (typeof reducer === "object") {
        const key = Object.keys(reducer)[0];
        const state = store.getState();
        console.log("state", state);
        return reducer[key]().then(x => {
          // 异步加载 reducer
          // console.log("x, x.default", x, x.default);
          // injectAsyncReducer(key, x.default);
          console.log("store._reducers", store._reducer);

          store.reset(
            combineReducers({
              ...store._reducer,
              [key]: x.default
            }),
            {
              // 添加默认字段
              [key]: 50,
              ...state
            }
          );
        });
      }
      
    }

    // processSaga(saga) {
    //   if (Array.isArray(saga)) {
    //     return Promise.all(saga.map(s => this.processSaga(s)));
    //   }
    //   if (typeof saga === "function") {
    //     return saga().then(s => {
    //       injectAsyncSaga(s.default);
    //     });
    //   }
    // }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
