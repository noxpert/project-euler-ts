// The sequence of triangle numbers is generated by adding the natural numbers.
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
// The first ten terms would be: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55,...
//
// Let us list the factors of the first seven triangle numbers:
//              1: 1
//              3: 1, 3
//              6: 1, 2, 3, 6
//              10: 1, 2, 5, 10
//              15: 1, 2, 3, 5, 15
//              21: 1, 3, 7, 21
//              28: 1, 2, 4, 7, 14, 28
//
// We can see that 28 is the first triangle number to have over five divisors.
//
// What is the value of the first triangle number to have over five hundred divisors?

import { factorsOfNumber } from "./math-utils";

class TriangleNumbers {
    currentTriangleNumber: number = 1;
    nextNumber: number = 2;

    nextTriangleNumber(): number {
        this.currentTriangleNumber += this.nextNumber;
        this.nextNumber++;
        return this.currentTriangleNumber;
    }
}

export function triangleNumberWithExpectedNumberOfFactors(expectedFactors: number): number {
    let triangleNumbers: TriangleNumbers = new TriangleNumbers();
    for (let numFactors: number = factorsOfNumber(triangleNumbers.currentTriangleNumber).length;
         numFactors < expectedFactors;
         numFactors = factorsOfNumber(triangleNumbers.nextTriangleNumber()).length) {
    }
    return triangleNumbers.currentTriangleNumber;
}
