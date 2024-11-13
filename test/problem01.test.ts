import { sumOfMultiples } from "../src/problem01";

describe("Unit tests for problem01", () => {
    it("Test example works", () => {
        let answer:number = sumOfMultiples(10, 3, 5);
        expect(answer).toBe(23);
    })

    it("Test solution", () => {
        let answer:number = sumOfMultiples(1000, 3, 5);
        expect(answer).toBe(233168);
    })

    it("Test no multiples", () => {
        let answer:number = sumOfMultiples(10, 12);
        expect(answer).toBe(0);
    })

    it("Test overlapping multiples", () => {
        let answer:number = sumOfMultiples(10, 2, 4);
        expect(answer).toBe(20);
    })
})
