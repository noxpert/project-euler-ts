import { largestPrimeFactor } from "../src/problem03";

describe("Unit tests for problem03", () => {
    it("Test example works", () => {
        let answer:number = largestPrimeFactor(13195);
        expect(answer).toBe(29);
    })

    it("Test solution", () => {
        let answer:number = largestPrimeFactor(600_851_475_143);
        expect(answer).toBe(6857);
    })

    it("Test value is 1", () => {
        let answer:number = largestPrimeFactor(1);
        expect(answer).toBe(1);
    })
})
