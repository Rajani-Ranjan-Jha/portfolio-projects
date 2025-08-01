const mongoose = require('mongoose')
const dotenv = require('dotenv')

// load env configuration
dotenv.config()

// connect to MongoDB
const connectDB = async () =>{
    try {
        res = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully!')
    } catch (error) {
        console.error('MongoDB connection failed!!', error.message)
        process.exit(1) // Exit process with failure
    }


}

// export the connectDB function
module.exports = connectDB