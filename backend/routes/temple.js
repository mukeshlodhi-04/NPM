const express = require('express');
const router = express.Router();
const Temple = require('../models/temple');
const upload = require('../middleware/upload');

// Add Temple
router.post('/', upload.single('image'), async (req, res) => {
  const { name, location, history, state } = req.body;
  const image = req.file.path;
  try {
    const temple = new Temple({ name, location, image, history, state });
    await temple.save();
    res.status(201).json(temple);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get Temples
router.get('/', async (req, res) => {
  try {
    const temples = await Temple.find();
    res.json(temples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;