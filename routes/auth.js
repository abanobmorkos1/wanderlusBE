const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ensure your user model is correctly defined
const router = express.Router();

router.post("/auth", async (req, res) => {
    const { name, email, password } = req.body;  // Destructure from req.body
    try {
        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Create JWT token
        const payload = { user: { id: newUser.id } };
        jwt.sign(
            payload,
            process.env.key,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token }); // Send token in response
            }
        );
    } catch (err) {
        console.error("Error in POST /auth:", err); // Log the error
        return res.status(500).json({ msg: "Server error" }); // Respond with a server error
    }
});

module.exports = router;