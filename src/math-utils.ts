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
    for (let num = 2; num < value / 2; num++) {
        if (isDivisible(value, num)) {
            return false;
        }
    }
    return true;
}