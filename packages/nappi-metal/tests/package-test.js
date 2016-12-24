import test from 'ava';

import NappiMetal from '../index';
import NappiError from '../lib/nappi-error';

test('NappiMetal package exports', t => {
  t.is(NappiMetal.NappiError, NappiError, 'include NappiError');
});
