import jwt from "jsonwebtoken"

const jwtToken = (payload) => {
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4d' })
}

export default jwtToken