const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

app = express()


require('./connection.js')

const PORT = process.env.PORT || 5000

const userRoute = require('./routes/user.js')
const houseRoute = require('./routes/house.js')

app.use(cors())
app.use(express.json())


app.use('/v1/user', userRoute)
app.use('/v1/house', houseRoute)



app.listen(PORT, () => {
    console.log(`Server is runing on Port http://localhost:${PORT}`)
})