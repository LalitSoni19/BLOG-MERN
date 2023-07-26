const authController = require('express').Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const verifyToken = require('../middlewares/verifyToken')

authController.post('/register', async (req, res) => {
    try {
        const isExisting = await findOne({ email: req.body.email })
        if (isExisting) {
            throw new Error("Already such an account. Try a different email")
        }

        const hashedPassword = await hash(req.body.password, 10)
        const newUser = await create({ ...req.body, password: hashedPassword })

        const { password, ...others } = newUser._doc
        const token = sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '5h' })

        return res.status(201).json({ user: others, token })
    } catch (error) {
        return res.status(500).json(error)
    }
})


authController.post('/login', async (req, res) => {
    try {
        const user = await findOne({ email: req.body.email })
        if (!user) {
            throw new Error("Invalid credentials")
        }

        const comparePass = await compare(req.body.password, user.password)
        if (!comparePass) {
            throw new Error("Invalid credentials")
        }

        const { password, ...others } = user._doc
        const token = sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' })

        return res.status(200).json({ user: others, token })
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = authController