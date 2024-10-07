import restoreIpAddresses from '../code/93'

test('restoreIpAddresses', () => {
    expect(restoreIpAddresses("25525511135")).toEqual(["255.255.11.135", "255.255.111.35"])
})