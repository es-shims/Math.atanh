'use strict';

var almostEqual = function (actual, expected) {
	var precision = 1e-11;
	return actual - expected < precision && expected - actual < precision;
};

module.exports = function (atanh, t) {
	t.test('should be correct', function (st) {
		st.equal(atanh(NaN), NaN, 'atanh(NaN');
		st.equal(atanh(-1.00000001), NaN, 'atanh(-1.00000001)');
		st.equal(atanh(1.00000001), NaN, 'atanh(1.00000001)');
		st.equal(atanh(-1e300), NaN, 'atanh(-1e300)');
		st.equal(atanh(1e300), NaN, 'atanh(1e300)');
		st.equal(atanh(-1), -Infinity, 'atanh(-1)');
		st.equal(atanh(1), Infinity, 'atanh(1)');
		st.equal(atanh(+0), +0, 'atanh(+0)');
		st.equal(atanh(-0), -0, 'atanh(-0)');
		st.ok(almostEqual(atanh(0.5), 0.5493061443340549), 'atanh(0.5)');
		st.ok(almostEqual(atanh(-0.5), -0.5493061443340549), 'atanh(-0.5)');
		st.ok(almostEqual(atanh(0.444), 0.47720201260109457), 'atanh(0.444)');
		st.end();
	});

	t.test('is correct for extreme non-infinities', function (st) {
		st.notEqual(atanh(1e-300), 0);
		st.ok(almostEqual(atanh(1e-300), 1e-300), 'atanh(1e-300)');
		st.end();
	});
};
