'use strict';
var MODULE_NAME = 'SubscriptionService';
var logger = require('log4js').getLogger(MODULE_NAME);

var db = require('../db');

module.exports.getSubscriptions = function* () {
	var subscriptions = yield db.Subscription.findAll();
    return subscriptions;
}

