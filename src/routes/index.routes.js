const { Router } = require('express')
const router = Router()
const { getUsers, createUsers, userById, deleteUsers, updateUsers } = require('../controllers/index.controllers')


router.get('/', getUsers)
router.get('/user/:id', userById)
router.post('/user/create', createUsers)
router.put('/user/update/:id', updateUsers)
router.delete ("/user/:id", deleteUsers)



module.exports = router
