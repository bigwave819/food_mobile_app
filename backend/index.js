import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import UserRoutes from "./routes/user.route.js"
import CategoryRoutes from "./routes/category.route.js"


const app = express()

dotenv.config()
app.use(cors())

//connection to the database
connectDB()

//root routing
app.use("/api/user", UserRoutes);
app.use("/api/category", CategoryRoutes)

const port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`connected to the port ${port}`);
})