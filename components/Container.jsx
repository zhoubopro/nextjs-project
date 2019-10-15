import React, { cloneElement } from 'react';

const style = {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 20px'
}

export default ({ children, renderer }) => {
  console.log(renderer.$$typeof);
  if (typeof renderer === 'object') {
    return cloneElement(renderer,
      {
        style: Object.assign({}, renderer.props.style, style),
        children
      })
  }
  else {
    return <div style={style}>{children}</div>
  }
}

