import React, { useRef, useContext, useState, useEffect, useLayoutEffect, useReducer } from 'react';
import MyContext from '../../lib/my-contentx';

class MyCount extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}

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
  // const [count, setCount] = useState(0);

  const [count, dispatchCount] = useReducer(countReducer, 10);
  const [name, setName] = useState('jerry');

  const context = useContext(MyContext);

  const inputRef = useRef();
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     // setCount(count => count + 1)
  //     dispatchCount({
  //       type: 'minus'
  //     })
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // 会在return 之前执行该方法
  useLayoutEffect(() => {
    console.log('layout effect in');
    return () => console.log('layout effect deteched')
  }, [count]);

  /// 会在return 之后执行该方法
  useEffect(() => {
    console.log('effect in', inputRef);
    return () => console.log('effect deteched')
  }, [count]);

  return (
    <div>
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={e => dispatchCount({ type: 'add' })}>{count}</button>
      <div>{context}</div>
    </div>
  );
}

export default MyCountFunc;
