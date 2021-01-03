'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var native = Math.atanh;
	if (
		!native
		// Chrome < 54 atanh incorrectly returns 0 for large numbers
		|| native(1e-300) === 0 // eslint-disable-line no-magic-numbers
	) {
		return implementation;
	}
	return native;
};
