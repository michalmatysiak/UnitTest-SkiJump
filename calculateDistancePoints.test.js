const assert = require("assert");
const calculateDistancePoints = require("./calculateDistancePoints");

describe("calculateDistancePoints", () => {
    describe("mamut", () => {
        it("should return 129 on mamut", () => {
            const actual = calculateDistancePoints(217.5, 205, 210);

            const expected = 129;

            assert.equal(actual, expected);
        });

        it("should return 140.4 on mamut", () => {
            const actual = calculateDistancePoints(216, 235, 199);

            const expected = 140.4;

            assert.equal(actual, expected);
        });

        it("should return 123.6 on mamut", () => {
            const actual = calculateDistancePoints(213, 205, 210);

            const expected = 123.6;

            assert.equal(actual, expected);
        });
    });
    describe("big", () => {
        it("should return 31.2 on big", () => {
            const actual = calculateDistancePoints(114, 130, 130);

            const expected = 31.2;

            assert.equal(actual, expected);
        });

        it("should return 74.4 on big", () => {
            const actual = calculateDistancePoints(137, 124, 129);

            const expected = 74.4;

            assert.equal(actual, expected);
        });

        it("should return 42 on big", () => {
            const actual = calculateDistancePoints(121, 138, 131);

            const expected = 42;

            assert.equal(actual, expected);
        });
    });
    describe("normal", () => {
        it("should return 70.8 on normal", () => {
            const actual = calculateDistancePoints(101, 119, 95);

            const expected = 70.8;

            assert.equal(actual, expected);
        });

        it("should return 81 on normal", () => {
            const actual = calculateDistancePoints(101.5, 102, 91);

            const expected = 81;

            assert.equal(actual, expected);
        });

        it("should return 96 on normal", () => {
            const actual = calculateDistancePoints(116, 101, 98);

            const expected = 96;

            assert.equal(actual, expected);
        });
    });
});
