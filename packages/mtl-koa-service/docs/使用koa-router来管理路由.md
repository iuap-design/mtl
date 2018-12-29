
> https://github.com/alexmingoia/koa-router

## 基本使用
```
const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1> guoyff </h1>`;
})

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>home page</h1>';
});

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
})

app.use(router.routes())

```

## 进一步优化

```
const router = require('koa-router')();

router
    .get('/', async (ctx, next) => {
        ctx.response.body = `<h1> guoyff </h1>`;
    })
    .get('/home', async (ctx, next) => {
        ctx.response.body = '<h1>home page</h1>';
    })
    .get('/404', async (ctx, next) => {
        ctx.response.body = '<h1>404 Not Found</h1>';
    })

app.use(router.routes())

```

## 其他请求方式

```
router
  .get('/', async (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', async (ctx, next) => {
    // ... 
  })
  .put('/users/:id', async (ctx, next) => {
    // ... 
  })
  .del('/users/:id', async (ctx, next) => {
    // ... 
  })
  .all('/users/:id', async (ctx, next) => {
    // ... 
  });
```

## 路由参数获取



## 路由变量