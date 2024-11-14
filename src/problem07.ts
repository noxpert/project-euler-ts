// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
//
// What is the 10,001 st prime number?

import { isPrime } from "./math-utils";

function findNextPrime(prime:number): number {
    let possiblePrime:number = prime + 1;
    while (true) {
        if (isPrime(possiblePrime)) {
            return possiblePrime;
        } else {
            possiblePrime++;
        }
    }
}

export function arrayOfPrimes(count: number): number[] {
    let primes:number[] = []
    while (primes.length < count) {
        let lastPrime:number|undefined = primes.at(-1);
        if (lastPrime === undefined) {
            primes.push(2);
        } else {
            primes.push(findNextPrime(lastPrime));
        }
    }
    return primes;
}

