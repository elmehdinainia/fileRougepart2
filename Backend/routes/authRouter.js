const router = require('express').Router()
const { 
  registerUser,
  verifyEmail,
  loginUser,
  resetPassword,
  forgotPassword,
  verifyForgotPassword,
  formForgotPassword,
  logout
} = require('../controllers/authController/authController')

const { tryCatch } = require('../middleware/tryCatch')
const { errorHandler } = require('../middleware/errorHandler')
const { authParemission, userPermission } = require('../middleware/permission')

router.post('/register', authParemission, tryCatch(registerUser))
router.get('/verify-email/:token', tryCatch(verifyEmail))
router.post('/login', authParemission, tryCatch(loginUser))
router.post('/reset-password', userPermission, tryCatch(resetPassword))
router.post('/forgot-Password', authParemission, tryCatch(forgotPassword))
router.get('/verify-forgot-password/:token', authParemission, tryCatch(verifyForgotPassword))
router.post('/form-forgot-password', authParemission, tryCatch(formForgotPassword))
router.get('/logout', userPermission, tryCatch(logout))

router.use(errorHandler)

module.exports = router