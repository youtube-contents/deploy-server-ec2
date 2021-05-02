const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.checkConnection)

module.exports = router;