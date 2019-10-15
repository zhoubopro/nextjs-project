// 启动koa服务和next服务入口文件
const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const session = require('koa-session');

const dev = process.env.NODE_ENV !== 'production';
// 初始化nextjs
const app = next({ dev });
const handle = app.getRequestHandler();

// let index = 0;
app.prepare().then(() => {
  const server = new Koa();
  // const router = new Router();

  // router.get('/test/:id', (ctx)=> {
  //   ctx.body = `<p>request /test ${ctx.params.id}</p>`;
  // });
  //
  // server.use(async (ctx, next)=> {
  //   ctx.body = {success: true}
  //   ctx.set('Content-Type', 'application/json');
  //   await next();
  // });
  //
  // server.use(router.routes());

  const router = new Router();
  router.get('/a/:id', async (ctx) => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id }
    });
    ctx.respond = false;
  });

  server.use(router.routes());


  // koa 中间件
  server.use(async (ctx, next) => {
    ctx.cookies.set('id', 'userId:xxx');
    // ctx.cookies.set('id', index, {
    //   httpOnly: false
    // });
    // index += 1;
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  })

  server.listen(3000, () => {
    console.log('koa start...!!!');
  });
});
