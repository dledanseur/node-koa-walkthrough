const Router = require('koa-router')

const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'List of users'
})

module.exports = router