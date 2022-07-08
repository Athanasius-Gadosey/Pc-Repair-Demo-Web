// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const nodemailer = require('nodemailer');

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


// Ports listen
app.listen(2000, function(req, res){
    console.log('Kindly listen on server port 2000');
});