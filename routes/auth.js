const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')

router.get('/:id', controller.login)

module.exports = router