'use strict';
var MODULE_NAME = 'AncienController';

var logger = require('log4js').getLogger(MODULE_NAME);

var ancienService = require('../services/ancienService');


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
