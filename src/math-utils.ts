export const isDivisible = (value: number, factor: number): boolean => value % factor === 0;

export function isPrime(value: number): boolean {
    for (let num = 2; num < value / 2; num++) {
        if (isDivisible(value, num)) {
            return false;
        }
    }
    return true;
}