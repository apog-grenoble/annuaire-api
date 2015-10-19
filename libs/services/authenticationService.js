'use strict';
var MODULE_NAME = 'AuthenticationService';
var logger = require('log4js').getLogger(MODULE_NAME);
var bcrypt = require('bcryptjs');

var ancienService = require('./ancienService');

module.exports.authenticate = function * (username, password, session) {

	var authenticated = false;
	var ancien = yield ancienService.getAncienByUsername(username);

	if (ancien) {
		if (isValid(ancien, password)) {
			session.ancien = ancien;
			session.authenticated = true;
			return true;
		}
	}
	return authenticated;
}

module.exports.changePassword = function * (id, newPassword) {
	let ancien = yield ancienService.getAncien(id);
	logger.debug("Before changing password : " + ancien.id + ancien.login + ancien.password);
	ancien.password = bcrypt.hashSync(newPassword, 8);
	logger.debug("After changing password : " + ancien.id + ancien.login + ancien.password);
	ancien = yield ancienService.updateAncien(ancien);
	return bcrypt.compareSync(newPassword, ancien.password);
}

function isValid(ancien, password) {
	// TODO : bcrypt that
	logger.debug("Testing " + password);
	logger.debug("Bcrypt said : " + (bcrypt.compareSync(password, ancien.password)));
	return ((ancien.password == password) || (bcrypt.compareSync(password, ancien.password)));
}
