

import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="todo">todo</Link>
        </li>
        <li>
          <Link to="fun">pages</Link>
        </li>
      </ul>;
}

export default Menu;