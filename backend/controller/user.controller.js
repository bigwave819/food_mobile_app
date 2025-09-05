import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import jwtToken from '../utils/jwtToken.js'

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const existingEmail = await User.findOne({ email })

        if (existingEmail) {
            return res.status(400).json({ message: "Email is in use" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = User.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwtToken(user.id)

        return res.status(201).json({
            name,
            email,
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: `the server error is ${error}`
        })
    }
}

export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body

        if ( !email || password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const user = await user.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "The user not found" })
        }

        const matchPassword = await bcrypt.compare(user.password, password)

        if (!matchPassword) {
            return res.status(400).json({ message: "The email or Password is invalid" })
        }
        const token = jwtToken(user.id)
        return res.status(200).json({
            message: "Login Successfully",
            user: {
                email,
                name
            }
        })
        
    } catch (error) {
        return res.status(500).json({
            message: `the server error is ${error}`
        })
    }
}