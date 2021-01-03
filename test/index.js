'use strict';

var atanh = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(atanh, t);

	t.end();
});
