import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('connected successfully');        
    } catch (error) {
        console.log(`error is ${error}`);        
    }
}
export default connectDB