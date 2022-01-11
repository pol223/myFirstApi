const express = require('express');
const app = express();
require('dotenv').config();
const myFirstController = require('./controllers/myFirtsController');
const cors = require('cors');
const connect = require('./database/connect');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// req = request
// res = response
app.post('/', myFirstController.helloWorld);

connect.createConnection();

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v2/time', require('./routes/userRoutes1'));
app.use('/api/v3/fact', require('./routes/s05userRoutes3'));
app.use('/api/v4/rand', require('./routes/s06userRoutes1'));
//app.use('/api/v5/num', require('./routes/s06userRoutes2'));
// app.use('/api/v5/mob', require('./routes/s07Routes1'));

app.listen(process.env.PORT || 3000, () => {
    console.log('My first API running!');
});
