const storage = require('local-storage')
const jwt = require('jsonwebtoken')

const authParemission = async (req, res, next) => {
  const token = storage('token')
  if (token) {
    const token_user = await jwt.verify(token, process.env.SECRET)
    if (token_user) res.send('You are already connected')
    else next()
  }
  else next()
}


const userPermission = async (req, res, next) => {
  const token = storage('token')
  if (!token) res.send('You are Not Connected')
  else {
    const token_user = await jwt.verify(token, process.env.SECRET)
    if (token_user) {
      next()
    } else res.send('Account Not Correct')
  }
}

module.exports = {
  authParemission,
  userPermission
}