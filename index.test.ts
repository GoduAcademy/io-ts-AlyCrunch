import test from 'node:test';
import assert from 'node:assert';
import {one} from '.';

test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(one, 1);
});
