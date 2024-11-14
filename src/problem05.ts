// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible
// by all the numbers from 1 to 20?

import { isDivisible } from "./math-utils";

function isDivisibleByAll(value:number, floor:number, ceiling:number): boolean {
    for (let i: number = ceiling; i >= floor; i--) {
        if (isDivisible(value, i)) {
            if (i === floor) {
                return true;
            }
        } else {
            return false;
        }
    }
    return false;
}

export function smallestDivisibleByAll(floor: number, ceiling: number) {
    let possibleAnswer:number = 1;
    let divisibleByAll:number = 0;
    while (divisibleByAll === 0) {
        if (isDivisibleByAll(possibleAnswer, floor, ceiling)) {
            divisibleByAll = possibleAnswer;
        } else {
            possibleAnswer++;
        }
    }
    return divisibleByAll;
}

