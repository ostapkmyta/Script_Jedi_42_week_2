//First task https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript
function whatNumberIsIt(n) {
    switch (true) {
        case (n === Number.MAX_VALUE): return 'Input number is Number.MAX_VALUE';
        case (n === Number.MIN_VALUE): return 'Input number is Number.MIN_VALUE';
        case (isNaN(n)): return 'Input number is Number.NaN';
        case (n === Number.NEGATIVE_INFINITY): return 'Input number is Number.NEGATIVE_INFINITY';
        case (n === Number.POSITIVE_INFINITY): return 'Input number is Number.POSITIVE_INFINITY';
        default: return 'Input number is' + ' ' + n;
    }
}

//Second task https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
    let R = r.toString(16);
    let G = g.toString(16);
    let B = b.toString(16);
    if (r < 16) {
        R = '0' + R
    }
    if (g < 16) {
        G = '0' + G
    }
    if (b < 16) {
        B = '0' + B
    }
    return '#' + R + G + B;
}

//Third task https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision/train/javascript
function howManySmaller(arr, n) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].toFixed(2) < n) {
            count++;
        }
    }
    return count;
}
