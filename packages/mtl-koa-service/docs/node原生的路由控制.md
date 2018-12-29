
```
app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = '<h1>index page</h1>';
    } else {
        await next();
    }
});
app.use(async (ctx, next) => {
    if (ctx.request.path === '/home') {
        ctx.response.body = '<h1>home page</h1>';
    } else {
        await next();
    }
});
app.use(async (ctx, next) => {
    if (ctx.request.path === '/404') {
        ctx.response.body = '<h1>404 Not Found</h1>';
    } else {
        await next();
    }
});
```