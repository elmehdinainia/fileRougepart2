const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/db')
require('./models')
const port = process.env.port || 4444

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

const authRouter = require('./routes/authRouter')
const clientRouter = require('./routes/UserRouter/clientRouter')
const livreurRouter = require('./routes/UserRouter/livreurRouter')
const managerRouter = require('./routes/UserRouter/managerRouter')

app.use('/api/auth', authRouter)
app.use('/api/user', clientRouter)
app.use('/api/user', livreurRouter)
app.use('/api/user', managerRouter)

app.all('*', (req, res) => {
  res.send('Page Not Found')
})

app.listen(port, () => {
  console.log(`server is runing on port ${port}`)
})