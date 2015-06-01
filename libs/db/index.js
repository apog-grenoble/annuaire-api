var nconf = require('nconf');
nconf.file('db', './conf/db.json');

var uriToDB = 'mysql://'
    + (nconf.get('db:user') || 'root') + ':'
    + (nconf.get('db:password') || 'root') + '@'
    + (nconf.get('db:host') || 'localhost') + ':'
    + (nconf.get('db:port') || '3306') + '/'
    + (nconf.get('db:database') || 'apog');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(uriToDB);
module.exports.sequelize = sequelize;

sequelize.import(__dirname+'/../models/ancien');

//module.exports.Ancien = require('../models/ancien');
