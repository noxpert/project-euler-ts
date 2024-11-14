// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible
// by all the numbers from 1 to 20?

import {isDivisible} from "./math-utils";

function isDivisibleByAll(value:number, first:number, second:number): boolean {
    for (let i: number = second; i >= first; i--) {
        if (isDivisible(value, i)) {
            if (i === first) {
                return true;
            }
        } else {
            return false;
        }
    }
    return false;
}

export function smallestDivisibleByAll(first: number, second: number) {
    let possibleAnswer:number = 1;
    let divisibleByAll:number = 0;
    while (divisibleByAll === 0) {
        if (isDivisibleByAll(possibleAnswer, first, second)) {
            divisibleByAll = possibleAnswer;
        } else {
            possibleAnswer++;
        }
    }
    return divisibleByAll;
}

