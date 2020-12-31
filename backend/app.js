const express = require('express');

const app = express();
var cors = require('cors')

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const connection = require('./dbConnection.js')
require('dotenv/config');

app.use(bodyparser.json());

app.use(cors());


require('./routes/users.js')(app);

require('./routes/favorites.js')(app);


app.get('/', (req, res) => {

    res.send('We are on home')
});

connection.connect();

app.listen(3000);