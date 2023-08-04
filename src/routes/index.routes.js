const { Router } = require('express')
const router = Router()
const { Users } = require('../controllers/index.controllers')


router.get('/users', Users)



module.exports = router
