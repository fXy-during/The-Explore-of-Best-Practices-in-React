import React from "react";
import loadAsyncComponent from "../../injectAsyncComponent";
import { Route, Link } from "react-router-dom";
// import { view as A, reducer as reducer_A } from "./A";
// import { view as B, reducer as reducer_B } from "./B";
// import { view as C, reducer as reducer_C } from "./C";

const AsyncA = loadAsyncComponent(() => import("./A/view.js"));
const AsyncC = loadAsyncComponent(() => import("./C/view.js"));
const AsyncB = loadAsyncComponent(() => import("./B/view.js"));

const PageWrap = () => {
  return <div>
      <ul>
        <li>
          <Link to="/fun/a">pages/a</Link>
        </li>
        <li>
          <Link to="/fun/b">pages/b</Link>
        </li>
        <li>
          <Link to="/fun/c">pages/c</Link>
        </li>
      </ul>
      <Route path="/fun/a" component={AsyncA} />
      <Route path="/fun/b" component={AsyncB} />
      <Route path="/fun/c" component={AsyncC} />
    </div>;
};
export default PageWrap;
