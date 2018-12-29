const koaRouter = require('koa-router')
const router = new koaRouter();

const HomeController = require('./controller/home')

// 主入口-》路由分发 -》controller-》调用模板进行渲染，加载 service处理服务逻辑
module.exports = (app) => {
  router.get( '/', HomeController.index )

  router.get('/home', HomeController.home)

  router.get('/home/:id/:name', HomeController.homeParams)

  router.get('/user', HomeController.login)

  router.post('/user/register', HomeController.register)

  app.use(router.routes())
    .use(router.allowedMethods())
}