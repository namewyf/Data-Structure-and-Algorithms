import groupAnagrams from "../code/49";

test('groupAnagrams', () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
})