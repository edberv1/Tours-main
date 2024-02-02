const express = require('express');
const mongoose = require('mongoose');
const Tour = require('./tourSchema');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/api/add-to-favorites', async (req, res) => {
  try {
    const tourData = req.body;
    const newTour = await Tour.create(tourData);
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});