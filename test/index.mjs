import atanh, * as atanhModule from 'math.atanh';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(atanh, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(atanhModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = atanhModule;
	t.equal((await import('math.atanh/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('math.atanh/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('math.atanh/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
