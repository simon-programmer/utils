import { shuffle } from '../shuffle';

describe('array/shuffle', () => {
    it('should return a new array', () => {
        const arr = ['a', 'b', 'c'];

        expect(shuffle(arr)).not.toBe(arr);
    });

    it('should return a shuffled array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const res = shuffle(arr);

        expect(res).toHaveLength(arr.length);

        expect(res).toEqual(expect.arrayContaining(arr));

        expect(res.some((val, idx) => arr[idx] !== val)).toBeTruthy();
    });
});
