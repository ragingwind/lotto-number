import test from 'ava'
import m from '.'

test(async t => {
	t.is(m().length, 6);
	t.is(m(10).length, 10);
	t.is(m(10, 45).length, 10);
});
