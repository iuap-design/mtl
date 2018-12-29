const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const nunkucks = require('koa-nunjucks-2')
const path = require('path')

const app = new Koa()

const router = require('./router')

app.use(bodyParser())
app.use(nunkucks({
    ext: "html",
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
        // 开启转义 防Xss
        trimBlocks: true
    }
}))

router(app);

app.listen(3000, () => {
    console.log('服务运行在 http://localhost:3000')
})