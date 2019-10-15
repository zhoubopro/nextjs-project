// import '../test.css';
import { Button } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete',
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

export default () => {

  function testGoToB() {
    // Router.push('/test/b')
    Router.push({
      pathname: '/test/b',
      query: {
        id: 2,
        name: 'zz'
      }
    }, '/test/b/2/zz')
  }

  return (
    <div>
      <Title>This Title</Title>
      <Link href="/a?id=1" as="/a/1">
        <Button>Index Koa</Button>
      </Link>
      <Button onClick={testGoToB}>B</Button>
    </div>
  )
}
