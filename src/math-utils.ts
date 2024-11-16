export function isDivisible(value: number, factor: number): boolean {
    return value % factor === 0;
}

export function isEven(value: number): boolean {
    return isDivisible(value, 2);
}

export function isOdd(value: number): boolean {
    return value % 2 === 1;
}

export function isPrime(value: number): boolean {
    if (value === 1) {
        return false;
    } else if ([2, 3, 5, 7, 11].includes(value)) {
        // Handle these first primes separately to allow the next checks.
        return true;
    } else if ([0, 2, 4, 5, 6, 8].includes(value % 10)) {
        // A number ending with any of these is not prime,
        // except 2 and 5 handled in the prior if.
        return false;
    } else if (isDivisible(value, 3)) {
        return false;
    } else if (isDivisible(value, 7)) {
        return false;
    } else if (isDivisible(value, 11)) {
        return false;
    }
    for (let num: number = 13; num < value / 2; num += 2) {
        // start iteration at 13, the first prime not handled above.
        if (isDivisible(value, num)) {
            return false;
        }
    }
    return true;
}

export function sumOfSquares(floor: number, ceiling: number): number {
    let sumOfSquares: number = 0;
    for (let num:number = floor; num <= ceiling; num++) {
        sumOfSquares += num * num
    }
    return sumOfSquares;
}

export function squareOfSums(floor: number, ceiling: number): number {
    let sum: number = 0;
    for (let num:number = floor; num <= ceiling; num++) {
        sum += num
    }
    return sum * sum;
}
