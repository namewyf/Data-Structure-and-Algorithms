import moveZeroes from "../code/283";

test('moveZeros', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
})