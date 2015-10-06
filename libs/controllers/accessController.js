'use strict';
var MODULE_NAME = 'AccessController';
var logger = require('log4js').getLogger(MODULE_NAME);

var auth = require('basic-auth');

var authenticationService = require('../services/authenticationService');

module.exports.isAuthenticated = function * (next) {
	var currentUser = auth(this.request);
	if (currentUser) {
		if (!this.session || !this.session.username || !this.session.authenticated || (this.session.username != currentUser.name)) {
			var authenticated = yield authenticationService.authenticate(currentUser.name, currentUser.pass, this.session);

			if (!authenticated) {
				// Authentication failed !
				logger.warn("Failed to authenticate user : refusing access");
				this.status = 403;
				this.body = "Access forbidden";
				return;
			}
		}
	} else {
		// TODO Ask for HTTP basic
		this.status = 401;
		this.set('WWW-Authenticate', 'Basic realm="/"')
		return;
	}
	yield next;
}


module.exports.hasUserAccess = function * (next) {
	
}

module.exports.hasAdminAccess = function * (next) {

}

