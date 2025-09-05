import Category from '../models/categoryModel.js'

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ message: "All fields must be filled in" })
        }

        const existingCategory = await Category.findOne({ name })

        if (existingCategory) {
            return res.status(400).json({ message: "the category Already exists" })
        }

        const category = Category.create({
            name
        })

        return res.status(201).json({
            message: "Created successfully",
            category: {
                category
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: `the server error is ${error}`
        })
    }
}


export const getCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ name })

        if (category.length == 0) {
            return res.status(404).json({ message: 'Category Not Found' })
        }

        return res.status(200).json({
            message: "All fields are required",
            category: {
                name
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: `the server error is ${error}`
        })
    }
}