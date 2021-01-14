const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./keys');
const path = require('path');
const postRouter = require('./routes/post');


// const clientPath = path.join(__dirname, 'client');

const server = express();
server.use(bodyParser.json());
// server.use('/api/post', require('./routes/post'))
server.use('/api/post', postRouter);
// server.use(express.static(clientPath));

// Connect Database
mongoose.connect(keys.mongoURI,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('MongoDB connected'))
    .catch((err)=>console.error(err));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    server.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
    server.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
server.listen(port, ()=>{
    console.log(`Server has been started on port  ${port}`);
});