import test from 'node:test';
import assert from 'node:assert';
import { tambahPengitung } from './hitung.js';

test.describe('Pengujian Penjumlahan Counter', () => {
  test.it('5 tambah 3 sama dengan 8', () => {
    assert.strictEqual(tambahPengitung(5, 3), 8);
  });
  
  test.it('0 tambah 10 sama dengan 10', () => {
    assert.strictEqual(tambahPengitung(0, 10), 10);
  });
});