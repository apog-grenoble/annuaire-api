'use strict';
var MODULE_NAME = 'AuthenticationService';
var logger = require('log4js').getLogger(MODULE_NAME);

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

function isValid(ancien, password) {
	// TODO : bcrypt that
	logger.debug("Testing " + ancien.password + " == " + password);
	return (ancien.password == password);
}
