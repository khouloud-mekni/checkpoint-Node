// TASK 5:
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const myPath = path.resolve("content", "index.html");
const result = fs.readFileSync(myPath, "utf-8");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});

const mailOptions = {
    from: '"khouloud Mekni" <khouloudwerhani122@gmail.com>"',
    to: "khouloud.mekni1998@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    html: result,
};
transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log("Email sent: " + info.response);
    }
});