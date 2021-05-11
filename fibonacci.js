const fibonacci = (n) => {
    let result = 1;
    if (n < 0) {
        throw Error('n must be a positive number!')
    } else if (n === 0) {
        result = 0;
    } else if (n > 2) {
        result = fibonacci(n - 1) + fibonacci(n - 2);
    }

    return result;
};

module.exports = fibonacci;
