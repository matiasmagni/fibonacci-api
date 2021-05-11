const fibonacci = require('./fibonacci');

const validValues = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
let actualValue;

describe('Fibonacci tests', () => {
    it('Fibonacci sequence returns correct values from 1 to 10.', () => {
        for (let i = 0; i <= 10; i++) {
            try {
                actualValue = fibonacci(i);
                expect(actualValue).toBe(validValues[i]);
            } catch (error) {
                throw Error(error + `\nFor value ${i}, result is ${actualValue}!`);
            }

        }
    });

    it('Fibonacci on negative numbers must throw an error.', () => {
        for (let i = -1; i <= -10; i--) {
            expect(() => fibonacci(i)).toThrow('n must be a positive number!');
        }
    });
});
