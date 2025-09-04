import mongoose from "mongoose";

const menuModel = mongoose.model({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    calories: {
        type: String,
        required: true,
    },
    proteins: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default menuModel;