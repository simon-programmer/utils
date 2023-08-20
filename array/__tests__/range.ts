import { range } from '../range';

describe('array/range', () => {
    it('should return array of numbers', () => {
        expect(range(1, 5)).toEqual([1, 2, 3, 4]);
        expect(range(-1, -5, -1)).toEqual([-1, -2, -3, -4]);

        expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
        expect(range(0, -20, -5)).toEqual([0, -5, -10, -15]);

        expect(range(4, 0)).toEqual([4, 3, 2, 1]);
        expect(range(20, 0, -5)).toEqual([20, 15, 10, 5]);
    });

    it('should return the empty array', () => {
        expect(range(1, 5, 10)).toEqual([]);

        expect(range(1, 1)).toEqual([]);

        expect(range(-1, -5)).toEqual([]);
        expect(range(1, 5, -1)).toEqual([]);

        expect(range(5, 0, 1)).toEqual([]);
    });
});
