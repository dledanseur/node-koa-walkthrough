const Router = require('koa-router')
const router = new Router()

const userService = require('../services/user.service')

router.get('/', async (ctx, next) => {
  try {
    ctx.body = await userService.getAllUsers()
  }
  catch (e) {
    console.log(e)
    ctx.status = 500
  }
})

module.exports = router