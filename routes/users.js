const Router = require('koa-router')
const router = new Router()

const userService = require('../services/user.service')

router.get('/', (ctx, next) => {
  ctx.body = userService.getAllUsers()
})

module.exports = router