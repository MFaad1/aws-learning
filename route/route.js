const express= require('express')
const router = express.Router()
const ControllerFunctions   = require('../controller/index')

router.post('/login', ControllerFunctions.login)

module.exports= router