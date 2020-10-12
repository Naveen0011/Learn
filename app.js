var express = require('express');
var app = express();
var mongoose = require('mongoose');
var controller = require('./controller'); 
var cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://root:naveen@cluster0.uca3j.mongodb.net/Feedback?retryWrites=true&w=majority');
controller(app);

app.listen(3000);