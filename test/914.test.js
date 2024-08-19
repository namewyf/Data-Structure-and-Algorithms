/* eslint-disable no-undef */
import hasGroupsSizeX from '../code/914'

test('test914', () => {
    expect(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2])).toBe(true)
})