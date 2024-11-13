// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
import { isDivisible } from "./math-utils";

export function sumOfMultiples(max: number, ...multiples: number[]): number {
    let sum: number = 0;
    for (let num = 1; num < max; num++) {
        for (let possibleMultiple of multiples) {
            if (isDivisible(num, possibleMultiple)) {
                sum += num;
                break;
            }
        }
    }
    return sum;
}
