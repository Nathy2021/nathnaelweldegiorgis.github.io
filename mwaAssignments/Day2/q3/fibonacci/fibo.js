const fibonacchi = function (number) {
    if (number >= 0) {
        if (number <= 2 && number >= 0) {
            return 1;
        }

        else {
            return fibonacchi(number - 1) + fibonacchi(number - 2);
        }
    }
    else {
        number *= -1;
        if (number <= 2 && number >= 0) {
            return 1;
        }

        else {
            return fibonacchi(number - 1) + fibonacchi(number - 2);
        }

    }
}
module.exports = {
    fibonacci: fibonacchi
}
