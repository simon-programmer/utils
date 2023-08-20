import { move } from '../move';

describe('array/move', () => {
    it('should return a new array', () => {
        const arr = ['a', 'b', 'c'];

        expect(move(0, 1, arr)).not.toBe(arr);
    });

    it('should move elements', () => {
        expect(move(2, 4, ['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'd', 'e', 'c']);

        expect(move(4, 2, ['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'e', 'c', 'd']);
    });

    it('should do nothing', () => {
        expect(move(0, 10, ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);

        expect(move(0, 0, ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });
});
