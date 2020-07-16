const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mailer = require('./mailer');
const sendMailRoute = require('./sendMailRoute');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/mail', sendMailRoute);

app.listen(3001, () => {
    console.log('Backend server is listening on port 3001');
})