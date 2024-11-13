import { sumEvenFibonacci } from "../src/problem02";

describe("Unit tests for problem02", () => {
    it("Test example works", () => {
        let answer:number = sumEvenFibonacci(100);
        expect(answer).toBe(44);
    })

    it("Test solution", () => {
        let answer:number = sumEvenFibonacci(4_000_000);
        expect(answer).toBe(4613732);
    })

    it("Test no even values when max is 1", () => {
        let answer:number = sumEvenFibonacci(1);
        expect(answer).toBe(0);
    })
})
