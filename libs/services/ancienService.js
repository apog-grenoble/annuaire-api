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
	var ancien = yield db.Ancien.findById(Number(id));
	return ancien;
}

module.exports.getAncienByUsername = function* (username) {
	logger.debug('getAncienByUsername : geting ancien with login ' + username);
	var ancien = yield db.Ancien.findOne({ where: { login: username }});
	return ancien;
}

module.exports.updateAncien = function* (ancien) {
	ancien.last_modified = new Date();
	ancien.save();
	return ancien;
}
