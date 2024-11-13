// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
import { isDivisible } from "./math-utils";

let problem01Sum: number = 0;
for (let num = 1; num < 1000; num++) {
    if (isDivisible(num, 3)) {
        problem01Sum += num;
    } else if (isDivisible(num, 5)) {
        problem01Sum += num;
    }
}
console.log(problem01Sum);

// Answer 233168