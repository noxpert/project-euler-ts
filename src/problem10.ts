// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of the primes below 2 million.

import { isPrime } from "./math-utils";

export function sumOfPrimes(ceiling: number): number {
    let sum = 0;
    for (let num: number = 1; num < ceiling ; num++) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
}
