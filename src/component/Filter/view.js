import React from 'react';
import { FILTER, TODO_All, TODO_ING, TODO_Done } from './constants'
import Link from "./Link";

const Filter = () => {
    return <div>
        <Link tap={TODO_Done} >
          {FILTER.DONE}
        </Link>
        <Link tap={TODO_ING} >
          {FILTER.ING}
        </Link>
        <Link tap={TODO_All} >
          {FILTER.ALL}
        </Link>
      </div>;
}

export default Filter;