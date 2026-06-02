import { describe, it } from 'node:test';
import assert from 'node:assert'; 

describe("Operasi matematika", () => {
    it("1 sama dengan 1", () => {
        assert.strictEqual(1, 1);
    });

    it("1 tidak sama dengan dua", () => {
        assert.notStrictEqual(1, 2);
    });

    it("1 tambah 2 sama dengan 3", () => {
        assert.strictEqual(1 + 2, 3);
    });

    it("1 tambah 3 sama dengan 4", () => {
        assert.strictEqual(1 + 3, 4);
    });
});

describe("Float", () => {
    it("0.1 tambah 0.2 tidak sama dengan 0.3", () => {
        assert.notStrictEqual(0.1 + 0.2, 0.3);
    });

    it("Pecahan desimal ditambah bilangan bulat menambah sisi bulatnya", () => {
        assert.strictEqual(1.1 + 2, 3.1);
    });
});