'use strict';
var MODULE_NAME = 'SubscriptionController';

var logger = require('log4js').getLogger(MODULE_NAME);

var subscriptionService = require('../services/subscriptionService');

module.exports.getSubscriptions = function * () {	
	let result = yield subscriptionService.getSubscriptions();
	this.body = result;
	this.status = 200;
};
