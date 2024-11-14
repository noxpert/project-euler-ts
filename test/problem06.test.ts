import { squareOfSumMinusSumOfSquares } from "../src/problem06";

describe("Unit tests for problem06", () => {
    it("Test example works", () => {
        let answer:number = squareOfSumMinusSumOfSquares(1, 10);
        expect(answer).toBe(2640);
    })

    it("Test solution", () => {
        let answer:number = squareOfSumMinusSumOfSquares(1, 100);
        expect(answer).toBe(25164150);
    })

    it("Test single digit", () => {
        let answer:number = squareOfSumMinusSumOfSquares(1, 1);
        expect(answer).toBe(0);
    })
})
