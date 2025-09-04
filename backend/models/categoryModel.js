import mongoose from "mongoose";

const categoryModel = mongoose.model({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Category = mongoose.model('Category', categoryModel)

export default Category