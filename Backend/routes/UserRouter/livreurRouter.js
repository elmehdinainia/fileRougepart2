const router = require('express').Router()
const {
  livreurUser
} = require('../../controllers/userController/livreurController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')

router.get('/livreur/me', tryCatch(livreurUser))

router.use(errorHandler)

module.exports = router