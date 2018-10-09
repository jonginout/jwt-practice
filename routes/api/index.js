const router = require('express').Router()
const auth = require('./auth')

router.use('/auth', auth)
//라우터에서 /auth 로 요청이 들어오면 위 라우터로 연결시켜줍시다.

module.exports = router