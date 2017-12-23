// import {} from ';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

// import { reducer as reducer_filter } from "./component/Filter/index";
// import { reducer as reducer_todo } from "./component/TodoList/index";

import createSagaMiddleware from "redux-saga";
// console.log(reducer_todo);
import resetReducerEnhancer from "./storeEnhancers/resetRuducer";
import { routerReducer } from 'react-router-redux';
import rootSaga from "./Sagas";

import { reducer as reducer_Todos } from './component/TodoList'
import { reducer as reducer_Filter } from './component/Filter'
import { reducer as reducer_CountC } from './component/pages/C'
const sagasMiddleware = createSagaMiddleware();

const initState = {};
const originReducer = {
    routing: routerReducer
}
const reducers = combineReducers({
  ...originReducer,
  todos: reducer_Todos,
  filter: reducer_Filter,
  count_C: reducer_CountC,
});

const enhancer = compose(
  resetReducerEnhancer,
  applyMiddleware(sagasMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, initState, enhancer);

sagasMiddleware.run(rootSaga);

store._reducer = originReducer;
export default store;
