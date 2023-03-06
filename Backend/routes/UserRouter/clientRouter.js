const router = require('express').Router()
const {
  clientUser,
  clientShowOrders,
  clientMakeOrder
} = require('../../controllers/userController/clientController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')

router.get('/client/me', tryCatch(clientUser))
router.get('/client/orders', tryCatch(clientShowOrders))
router.post('/client/orders', tryCatch(clientMakeOrder))

router.use(errorHandler)

module.exports = router