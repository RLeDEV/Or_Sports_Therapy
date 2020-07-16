const nodemailer = require('nodemailer');

module.exports = function sendMessage(fullname, phone, email, message) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "noc.dymailer@gmail.com",
            pass: 'Qwerty2211!'
        }
    });

    var mailOptions = {
        from: "noc.dymailer@gmail.com",
        to: "bos901@gmail.com",
        subject: "הודעה חדשה מלקוח באתר",
        html:  `<h1>התקבלה הודעה חדשה מלקוח באתר האנטרנט שלך</h1>
        שם הלקוח: ${fullname} <br />
        מספר טלפון:  ${phone}<br />
        אימייל:  ${email}<br />
        תוכן ההודעה: ${message}`
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
        }
        else console.log("A new email sent");
    });
}