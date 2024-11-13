// The prime factors of 13195 are 5, 7, 13, 29.
// What is the largest prime factor of the number 600851475143
import {isDivisible, isPrime} from "./math-utils";

let inputValue: number = 600851475143;
let problem03Answer: number = 1;

for (let possibleFactor = 3; possibleFactor <= inputValue / 2; possibleFactor++) {
    if (isDivisible(inputValue, possibleFactor)) {
        // Found a factor, check if reciprocal factor is prime.
        let reciprocalFactor: number = inputValue / possibleFactor;
        if (isPrime(reciprocalFactor)) {
            // If the reciprocal factor is prime it must be the largest prime factor.
            problem03Answer = reciprocalFactor;
            break;
        }
        if (isPrime(possibleFactor)) {
            problem03Answer = possibleFactor;
        }
        if (possibleFactor * possibleFactor >= inputValue) {
            // if the square of the factor is larger than the input number,
            // we must have found the largest prime factor already.
            break;
        }
    }
}

console.log(problem03Answer);

// Answer 6857
