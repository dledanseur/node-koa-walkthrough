const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

const router = require('./router')

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(4000)