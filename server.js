var express = require('express');
var settings = require('./dbConfig');
var route = require('./routes/route');
//var db = require('./core/db');

var app = express();

app.listen(settings.webPort);
console.log("app running on "+settings.webPort);



route.serve(app,express);

