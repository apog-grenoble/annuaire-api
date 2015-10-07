'use strict';
var MODULE_NAME = 'AncienFilter';
var logger = require('log4js').getLogger(MODULE_NAME);

module.exports.getAncien = function * (next) {
	//TODO : tests on param id

	if (!(this.session.ancien.id == this.params.id)) {
		logger.warn("Tried to access other ancien infos");
		this.status = 403;
		this.body = "Access forbidden";
		return;
	}
	yield next;
};

