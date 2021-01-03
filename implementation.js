'use strict';

var log1p = require('math.log1p');
var isNaN = require('is-nan');

var abs = Math.abs;
var $Number = Number;

module.exports = function atanh(value) {
	var x = $Number(value);

	if (x === 0) {
		return x;
	}
	if (x === -1) {
		return -Infinity;
	}
	if (x === 1) {
		return Infinity;
	}
	if (isNaN(x) || x < -1 || x > 1) {
		return NaN;
	}

	var a = abs(x);
	return (x < 0 ? -1 : 1) * log1p(2 * a / (1 - a)) / 2;
};
