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
    }
    for (let num: number = 2; num <= value / 2; num++) {
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