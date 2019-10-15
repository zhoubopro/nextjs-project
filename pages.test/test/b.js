import React, { useRef, useContext, useState, useEffect, useLayoutEffect, useReducer } from 'react';
import MyContext from '../../lib/my-contentx';

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

function MyCountFunc() {
  const [count, dispatchCount] = useReducer(countReducer, 10);
  const [name, setName] = useState('jerry');

  const config = {
    text: `count is ${count}`,
    color: count > 3 ? 'yellow' : 'blue'
  }
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>

    </div>
  );
}

export default MyCountFunc;
