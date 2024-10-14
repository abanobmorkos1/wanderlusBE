const express = require("express");
const multer = require("multer");
const router = express.Router();

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// POST route for uploading files
router.post('/upload', upload.single('avatar'), (req, res) => {
  res.json(req.file); // Respond with uploaded file details
});

module.exports = router;