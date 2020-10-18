const express = require('express')
const router = express.Router()
const controller = require('../controllers/friend')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/', controller.remove)
router.post('/', controller.create)
router.post('/:id', controller.update)

module.exports = router