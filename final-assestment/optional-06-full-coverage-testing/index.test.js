import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test: Menambahkan dua bilangan positif
test('penjumlahan 3 dan 5 seharusnya return 8', () => {
  assert.strictEqual(sum(3, 5), 8, '3 + 5 seharusnya equal 8');
});

// Test: Salah satu bilangan adalah negatif
test('penjumlahan -3 dan 5 seharusnya return 0', () => {
  assert.strictEqual(sum(-3, 5), 0, 'Negative numbers seharusnya return 0');
});

// Test: Kedua bilangan adalah negatif
test('penjumlahan -3 dan -5 seharusnya return 0', () => {
  assert.strictEqual(sum(-3, -5), 0, 'Negative numbers seharusnya return 0');
});

// Test: Salah satu input bukan angka
test('penjumlahan "3" dan 5 seharusnya return 0', () => {
  assert.strictEqual(sum('3', 5), 0, 'Non-numeric input seharusnya return 0');
});

// Test: Kedua input bukan angka
test('penjumlahan "3" dan "5" seharusnya return 0', () => {
  assert.strictEqual(sum('3', '5'), 0, 'Non-numeric input seharusnya return 0');
});

// Test: Salah satu input adalah null
test('penjumlahan null dan 5 seharusnya return 0', () => {
  assert.strictEqual(sum(null, 5), 0, 'Null input seharusnya return 0');
});

// Test: Input bilangan nol
test('penjumlahan 0 dan 0 seharusnya return 0', () => {
  assert.strictEqual(sum(0, 0), 0, '0 + 0 seharusnya equal 0');
});

// Test: Salah satu input adalah undefined
test('penjumlahan undefined dan 5 seharusnya return 0', () => {
  assert.strictEqual(sum(undefined, 5), 0, 'Undefined input seharusnya return 0');
});

// Test: Input besar untuk mengecek batasan fungsi
test('penjumlahan 100000 dan 200000 seharusnya return 300000', () => {
  assert.strictEqual(sum(100000, 200000), 300000, '100000 + 200000 seharusnya equal 300000');
});
