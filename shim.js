'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathAtanh() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ atanh: polyfill },
		{ atanh: function () { return Math.atanh !== polyfill; } }
	);
	return polyfill;
};
