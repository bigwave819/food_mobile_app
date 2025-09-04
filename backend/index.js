import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'


const app = express()

dotenv.config()
app.use(cors())

//connection to the database
connectDB()

const port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`connected to the port ${port}`);
})