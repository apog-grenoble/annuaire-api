require('log4js').configure('conf/log4js.json');
var koa = require('koa');
var router = require('koa-router');

var app = module.exports = koa();

var nconf = require('nconf');
nconf.file('app', 'conf/app.json');

var db = require('./libs/db');


// Getting controllers

var ancienController = require('./libs/controllers/ancienController');
var subscriptionController = require('./libs/controllers/subscriptionController');

// Routing controllers
app.use(router(app));

app.get('/anciens', ancienController.getAnciens);
app.get('/anciens/:id', ancienController.getAncien);

app.get('/cotisations', subscriptionController.getSubscriptions);


//app.use(function *(){
//  this.body = 'Hello World from koa JS';
//});

app.listen(nconf.get('app:port') || 8081);

