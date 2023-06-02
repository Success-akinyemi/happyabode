const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PW}@cluster0.mdbvaiq.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB'))
.catch((err) => console.log(err))