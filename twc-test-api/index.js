const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080

mongoose.connect('mongodb://localhost:27017/twc-test', {

app.get('/', (req, res) => {
    res.json({ message: 'server is running' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));