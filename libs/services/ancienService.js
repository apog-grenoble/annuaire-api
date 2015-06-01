'use strict';
var MODULE_NAME = 'AncienService';
var logger = require('log4js').getLogger(MODULE_NAME);

var db = require('../db');

module.exports.getAnciens = function* () {
	return "From ancienService";
}

module.exports.getAncien = function* (id) {
	console.log(id);
	var ancien = yield db.sequelize.models.Ancien.find(Number(id));
	return ancien;
}
