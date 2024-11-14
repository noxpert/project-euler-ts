import { smallestDivisibleByAll } from "../src/problem05";

describe("Unit tests for problem05", () => {
    it("Test example works", () => {
        let answer:number = smallestDivisibleByAll(1, 10);
        expect(answer).toBe(2520);
    })

    it("Test solution", () => {
        let answer:number = smallestDivisibleByAll(1, 20);
        expect(answer).toBe(232792560);
    })

    it("Test single digit", () => {
        let answer:number = smallestDivisibleByAll(1, 1);
        expect(answer).toBe(1);
    })
})
