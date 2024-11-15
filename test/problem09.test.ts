import { findPythagoreanTripletWithSum } from "../src/problem09";

describe("Unit tests for problem09", () => {
    it("Test example", () => {
        let answer:number[] = findPythagoreanTripletWithSum(12);
        expect(answer).toEqual([3, 4, 5]);
    })

    it("Test solution", () => {
        let answer:number[] = findPythagoreanTripletWithSum(1000);
        expect(answer).toEqual([200, 375, 425]);
        console.log(`Answer is ${answer[0] * answer[1] * answer[2]}`);
    })

})
