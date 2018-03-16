var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: '欢迎使用 MTL App!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: '欢迎使用 MTL foo!'
  });
});

module.exports = router;
