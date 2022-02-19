const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Localhost = require('./server');
const Database = require('./database');
const User = require('./models/User');
const Router = require('./routes/router');

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('Hello World!');
});