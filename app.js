const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

const app = express();
const port = 8000;
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MongoDB connection

mongoose.connect('mongodb://adeelumar154:adeelumar(143)$@ac-xyamjwa-shard-00-00.kowlopz.mongodb.net:27017,ac-xyamjwa-shard-00-01.kowlopz.mongodb.net:27017,ac-xyamjwa-shard-00-02.kowlopz.mongodb.net:27017/advocite?ssl=true&replicaSet=atlas-eg5czy-shard-0&authSource=admin&retryWrites=true&w=majority&appName=advocite')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Routes
app.use('/api/data', dataRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
