const Router = require('koa-router')

const router = new Router()

const users = require('./routes/users')

router.use('/users', users.routes(), users.allowedMethods())

module.exports = router
