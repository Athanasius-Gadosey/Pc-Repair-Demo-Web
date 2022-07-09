// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home')
});

app.get('/about', function(req, res){
    res.render('about')
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/', function(req, res) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'athanasuisgadosey@gmail.com',
            pass: 'liveping@123'
        }
    });

    let mailOptions = {
        from: 'Athanasuis Gadosey <athanasuisgadosey@gmail.com>',
        to: 'tecsol@yahoo.com',
        subject: 'Technical Solution',
        text: 'The submission as the following issues... name: ' + req.body.name + 'email: '+ req.body.email + 'message: '+ req.body.message,
        html: '<p>The submission as the following issues...</p><ul><li>name: '+ req.body.name+'</li><li>email: ' + req.body.email +'</li><li>message: ' + req.body.message + '</li></ul>'
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err);
            res.redirect('/');
        }
        else{
            console.log('Message sent:' + info.response);
            res.redirect('/');
        }
    });

});

// Ports listen
app.listen(2000, function(req, res){
    console.log('Kindly listen on server port 2000');
});
