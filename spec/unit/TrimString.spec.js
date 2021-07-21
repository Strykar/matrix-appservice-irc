"use strict";
const { trimString } = require("../../lib/util/TrimString.js");

describe("trimString", function() {
    it("should not cut unicode characters in half", (done) => {
        const input = "lol 😅";
        const result = trimString(input, 5);
        expect(result).toEqual(input);

        done();
    });

    it("should trim trailing whitespace by itself", (done) => {
        const input = "lol 😅";
        const result = trimString(input, 4);
        expect(result).toEqual('lol');

        done();
    });

    it('should stop trimming at the word boundary if reasonable', (done) => {
        const input = "this sentence is waaaaay too long";
        const result = trimString(input, 20);
        expect(result).toEqual('this sentence is');

        done();
    });

    it('should give up looking for a word boundary if result would become too short', (done) => {
        const input = "we're in Llanfairpwllgwyngyll";
        const result = trimString(input, 24);
        expect(result).toContain("we're in Llan");

        done();
    });
});
