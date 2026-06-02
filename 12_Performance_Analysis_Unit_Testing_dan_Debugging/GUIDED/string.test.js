import { describe, it } from 'node:test';
import assert from 'node:assert';

describe("Truthy dan falsy", () => {
    it("Nilai kosong adalah falsy", () => {
        assert.ok(!""); 
    });

    it("String kosong sama dengan false (loose equality)", () => {
        assert.equal("", false);
    });

    it("Nilai string yang ada isinya adalah truthy", () => {
        assert.ok("Hello, Word!");
    });
});