// The prime factors of 13195 are 5, 7, 13, 29.
// What is the largest prime factor of the number 600851475143
import { isDivisible, isPrime } from "./math-utils";


export function largestPrimeFactor(value: number) {
    let primeFactor: number = 1;
    for (let possibleFactor = 3; possibleFactor <= value / 2; possibleFactor++) {
        if (isDivisible(value, possibleFactor)) {
            // Found a factor, check if reciprocal factor is prime.
            let reciprocalFactor: number = value / possibleFactor;
            if (isPrime(reciprocalFactor)) {
                // If the reciprocal factor is prime it must be the largest prime factor.
                primeFactor = reciprocalFactor;
                break;
            }
            if (isPrime(possibleFactor)) {
                primeFactor = possibleFactor;
            }
            if (possibleFactor * possibleFactor >= value) {
                // if the square of the factor is larger than the input number,
                // we must have found the largest prime factor already.
                break;
            }
        }
    }
    return primeFactor;
}
