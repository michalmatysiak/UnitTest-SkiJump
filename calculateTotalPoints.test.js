const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

//distance, hillSize, kPoint, styleNotes, windFactor, gateFactor

describe.only('calculateTotalPoints', () => {
    describe('mamut', () => {
        it('should return 208.3 on mamut', () => {
            const actual = calculateTotalPoints(227.5, 225, 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);
        
            const expected = 208.3;
        
            assert.equal(actual, expected);
        });

        it('should return 205.8 on mamut', () => {
            const actual = calculateTotalPoints(223, 225, 200, [18.5, 18.5, 18.5, 19, 18.5], 8.7, -6);
        
            const expected = '205.8';
        
            assert.equal(actual, expected);
        });
    });
    describe('big', () => {
        it('should return 137.3 on big', () => {
            const actual = calculateTotalPoints(134, 134, 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);
        
            const expected = 137.3;
        
            assert.equal(actual, expected);
        });

        it('should return 132.1 on big', () => {
            const actual = calculateTotalPoints(131, 134, 120, [18.5, 18.5, 19.5, 19, 18.5], 0, -3.7);
        
            const expected = '132.1';
        
            assert.equal(actual, expected);
        });
    });
    describe('normal', () => {
        it('should return 131.8 on normal', () => {
            const actual = calculateTotalPoints(111, 109, 98, [19, 19.5, 19, 19, 19], 3.2, -14.4);
        
            const expected = 131.8;
        
            assert.equal(actual, expected);
        });

        it('should return 125.9 on normal', () => {
            const actual = calculateTotalPoints(106, 109, 98, [18.5, 19, 18.5, 18.5, 18.5], 6.4, -12);
        
            const expected = '125.9';
        
            assert.equal(actual, expected);
        });
    });
});