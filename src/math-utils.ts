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
    } else if ([2, 3, 5, 7, 11, 13, 17, 19].includes(value)) {
        // Handle these first primes separately before the more general checks below.
        return true;
    } else if (isDivisible(value, 2)) {
        return false;
    } else if (isDivisible(value, 3)) {
        return false;
    } else if (isDivisible(value, 5)) {
        return false;
    } else if (isDivisible(value, 7)) {
        return false;
    } else if (isDivisible(value, 11)) {
        return false;
    } else if (isDivisible(value, 13)) {
        return false;
    } else if (isDivisible(value, 17)) {
        return false;
    } else if (isDivisible(value, 19)) {
        return false;
    }
    for (let num: number = 23; num <= Math.sqrt(value); num++) {
        // start iteration at 23, the first prime not handled above.
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
