'use strict';
var MODULE_NAME = 'AncienService';
var logger = require('log4js').getLogger(MODULE_NAME);

var db = require('../db');

module.exports.getAnciens = function* () {
	var anciens = yield db.Ancien.findAll();
    return anciens;
}

module.exports.getAncien = function* (id) {
	logger.debug('getAncien : getiing ancien with id ' + id);
	var ancien = yield db.Ancien.find(Number(id));
	return ancien;
}
