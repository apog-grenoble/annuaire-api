'use strict';
var MODULE_NAME = 'AuthenticationFilter';
var logger = require('log4js').getLogger(MODULE_NAME);

var auth = require('basic-auth');

var authenticationService = require('../services/authenticationService');

module.exports.isAuthenticated = function * (next) {
	var currentUser = auth(this.request);
	if (currentUser) {
		if (!this.session || !this.session.ancien || !this.session.authenticated || (this.session.ancien.login != currentUser.name)) {
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
		// Ask for HTTP basic
		this.status = 401;
		this.set('WWW-Authenticate', 'Basic realm="/"')
		return;
	}
	yield next;
}

module.exports.hasAdminAccess = function * (next) {
	if (!this.session.ancien.is_admin) {
		logger.warn("Tried to access admin only resource");
		this.status = 403;
		this.body = "Access forbidden";
		return;
	}
	yield next;
}

