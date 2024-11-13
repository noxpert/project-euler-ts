// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// By considering the terms in the Fibonacci sequence whose values do not exceed four million,
// find the sum of the even-valued terms.
import { isEven } from "./math-utils";

export function sumEvenFibonacci(max: number): number {
    let value1: number = 0;
    let value2: number = 1;
    let fibonacci: number = 0;
    let problem02Sum: number = 0;

    while (value1 + value2 < max) {
        fibonacci = value1 + value2;
        value1 = value2;
        value2 = fibonacci;
        if (isEven(fibonacci)) {
            problem02Sum += fibonacci;
        }
    }
    return problem02Sum;
}