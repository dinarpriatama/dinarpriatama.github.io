import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Test cases
test('penjumlahan 1 + 2 = 3', () => {
  assert.strictEqual(sum(1, 2), 3, '1 + 2 seharusnya = 3');
});

test('penjumlahan -1 + 1 = 0', () => {
  assert.strictEqual(sum(-1, 1), 0, '-1 + 1 seharusnya = 0');
});

test('penjumlahan 0 + 0 = 0', () => {
  assert.strictEqual(sum(0, 0), 0, '0 + 0 seharusnya = 0');
});
