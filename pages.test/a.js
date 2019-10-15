import { withRouter } from 'next/router';
import Link from 'next/link';
// import moment from 'moment'
// export default () => {
//   return (
//     <div>A</div>
//   )
// }
const A = ({ router, name, time }) => {
  return (
    <>
      <Link href="#aaa">
        <div className="div">{time} A {router.query.id} {name}</div>
      </Link>
      <style jsx>
        {`
          .div{
          color: blue
          }
        `}
      </style>
      <style jsx global>{`
        div{background: #ccc;}
      `}
      </style>
    </>
  )
}

// A.getInitialProps = () => {
//   return {
//     name: 'jerry'
//   }
// }


A.getInitialProps = async (ctx) => {
  // 真正用到moment 的时候才加载moment
  const moment = await import('moment');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Tom',
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      })
    }, 1000)
  });

  return await promise;
};
export default withRouter(A)
