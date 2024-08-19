/* eslint-disable no-undef */
import isMatch from "../code/10"

test('10', () => {
    expect(isMatch('aa', 'a*')).toBe(true)
})