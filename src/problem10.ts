// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of the primes below 2 million.

import { isPrime } from "./math-utils";

export function sumOfPrimes(ceiling: number): number {
    if (ceiling < 2) {
        return 0;
    } else if (ceiling < 3) {
        return 2;
    }
    let sum = 5;

    for (let num: number = 5; num < ceiling ; num += 2) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
}
