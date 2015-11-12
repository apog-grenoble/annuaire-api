require('log4js').configure('conf/log4js.json');
var koa = require('koa');
var router = require('koa-router');
var session = require("koa-generic-session");
var koaBodyParser = require("koa-body");

var app = module.exports = koa();

// Session
app.keys = ["keys", "keykeys"];
app.use(session());
app.use(koaBodyParser({
	formLimit: "20mb",
	jsonLimit: "20mb",
}));

var nconf = require('nconf');
nconf.file('app', 'conf/app.json');

var db = require('./libs/db');


// Getting controllers

var ancienController = require('./libs/controllers/ancienController');
var ancienFilter = require('./libs/filters/ancienFilter');

var subscriptionController = require('./libs/controllers/subscriptionController');


var authenticationFilter = require('./libs/filters/authenticationFilter');

// Routing controllers
app.use(router(app));

app.get('/anciens', authenticationFilter.isAuthenticated, authenticationFilter.hasAdminAccess, ancienController.getAnciens);
app.get('/anciens/:id', authenticationFilter.isAuthenticated, ancienFilter.getAncien, ancienController.getAncien);
app.post('/anciens/:id/password', authenticationFilter.isAuthenticated, ancienFilter.changePassword, ancienController.changePassword);

app.get('/cotisations', authenticationFilter.isAuthenticated, authenticationFilter.hasAdminAccess, subscriptionController.getSubscriptions);


//app.use(function *(){
//  this.body = 'Hello World from koa JS';
//});

app.listen(nconf.get('app:port') || 8081);

