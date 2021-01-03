'use strict';

require('../shim')();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.atanh.length, 1, 'Math.atanh has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.atanh.name, 'atanh', 'Math.atanh has name "atanh"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'atanh'), 'Math.atanh is not enumerable');
		et.end();
	});

	runTests(Math.atanh, t);

	t.end();
});
