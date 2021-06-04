const greeter = require('../greeter')

describe('Testing the greeter function', () => {
    test('says hello first name and second name as inserted', () => {
        expect(greeter('Selena', 'Khan')).toBe('Hello Selena Khan')
    })
    test('Testing for first name to show', () => {
        expect(greeter('Selena')).toBe('Welcome Selena')
    })
})
