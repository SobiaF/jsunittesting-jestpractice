const sum = require('../sum')

test('adds 1 + 2 to = 3', () => {
    expect(sum(1, 2)).toBe(3)
})

describe('Testing the sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test('adds 3 + 5 to not equal 9', () => {
        expect(sum(3, 5)).not.toBe(9)
    })
})