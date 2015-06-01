'use strict';
var MODULE_NAME = 'AncienController';

var logger = require('log4js').getLogger(MODULE_NAME);

var ancienService = require('../services/ancienService');


module.exports.getAnciens = function * () {	
	let result = yield ancienService.getAnciens();
	logger.debug("getAnciens - Service responded : " + result);
	this.body = result;
	this.status = 200;
};

module.exports.getAncien = function * () {	
	let result = yield ancienService.getAncien(this.params.id);
	logger.debug("getAncien with id " + this.params.id + " - Service responded : " + result);
	this.body = result;
	this.status = 200;
};
