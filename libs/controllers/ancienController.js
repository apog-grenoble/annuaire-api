'use strict';
var MODULE_NAME = 'AncienController';

var logger = require('log4js').getLogger(MODULE_NAME);

var ancienService = require('../services/ancienService');
var authenticationService = require('../services/authenticationService');

module.exports.getAnciens = function * () {	
	let result = yield ancienService.getAnciens();
	this.body = result;
	this.status = 200;
};

module.exports.getAncien = function * () {	
	let result = yield ancienService.getAncien(this.params.id);
	this.body = result;
	this.status = 200;
};

module.exports.changePassword = function * () {
	logger.debug(this.request.body);
	let modified = yield authenticationService.changePassword(this.params.id, this.request.body.newPassword);
	if (!modified) {
		this.body = "Failed";
		this.status = 418; // TODO
	}
	this.body = "OK";
	this.status = 200;
}
