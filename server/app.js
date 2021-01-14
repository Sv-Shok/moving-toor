const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./keys');
// const path = require('path');
const postRouter = require('./routes/post');

const port = process.env.PORT || 5000;
// const clientPath = path.join(__dirname, 'client');

const app = express();
app.use(bodyParser.json());
// app.use('/api/post', require('./routes/post'))
app.use('/api/post', postRouter);
// app.use(express.static(clientPath));

mongoose.connect(keys.mongoURI,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('MongoDB connected'))
    .catch((err)=>console.error(err));


app.listen(port, ()=>{
    console.log(`Server has been started on port  ${port}`);
});