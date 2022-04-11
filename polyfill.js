'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var orig = Math.atanh;
	if (
		!orig
		// Chrome < 54 atanh incorrectly returns 0 for large numbers
		|| orig(1e-300) === 0 // eslint-disable-line no-magic-numbers
	) {
		return implementation;
	}
	return orig;
};
