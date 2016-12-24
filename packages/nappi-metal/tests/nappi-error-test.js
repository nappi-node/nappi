import test from 'ava';

import NappiError from '../lib/nappi-error';

test('NappiError class', t => {
  const expectedMessage = 'test message';

  const error = new NappiError(expectedMessage);

  t.true(error instanceof Error, 'extends Error');
  t.is(error.message, expectedMessage,
    'receives message as constructor argument');
});

test('NappiError#withCause method', t => {
  const error = new NappiError('message');
  const otherError = new Error('other message');

  const result = error.withCause(otherError);

  t.is(result, error, 'returns self');
  t.is(error.cause, otherError, 'sets "cause" property to argument');

  const notError = {test: 'object'};

  error.withCause(notError);

  t.not(error.cause, notError, 'ignores non-error arguments');
});
