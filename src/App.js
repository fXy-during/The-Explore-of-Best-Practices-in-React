import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import gen  from './generator';
// import { Todo } from "./component/TodoList";
// import { view as Filter } from "./component/Filter";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import loadAsyncComponent from "./injectAsyncComponent";
import TopMenu from "./component/menu";

const AsyncTodo = loadAsyncComponent(() => import("./component/todo.js"));

const AsyncHome = loadAsyncComponent(() => import("./component/home/index.js"));

const AsyncFun = loadAsyncComponent(() => import("./component/pages/index.js"));

const AsyncC = loadAsyncComponent(() => import("./component/pages/C/view.js"));

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <TopMenu />
        <Switch>
          <Route path="/home" component={AsyncHome} />
          <Route path="/todo" component={AsyncTodo} />
          <Route path="/fun" component={AsyncC} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
