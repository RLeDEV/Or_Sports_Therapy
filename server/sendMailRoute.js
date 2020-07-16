const express = require('express');
const mailer = require('./mailer');

var router = express.Router();

router.post('/sendmail', (req, res) => {
    const fullName = req.body.fullName;
    const phoneNum = req.body.phoneNum;
    const email = req.body.email;
    const message = req.body.message;
    console.log(fullName)
    try {
        mailer(fullName,phoneNum,email,message);
    }
    catch(err) {
        console.log(err);
    }
})

module.exports = router;