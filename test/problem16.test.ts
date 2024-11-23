import { powerDigitSum } from "../src/problem16";

describe("Unit tests for problem16", () => {
    it("Test small values", () => {
        expect(powerDigitSum(2, 1)).toBe(2);
        expect(powerDigitSum(2, 2)).toBe(4);
        expect(powerDigitSum(2, 3)).toBe(8);
        expect(powerDigitSum(2, 4)).toBe(7);
        expect(powerDigitSum(3, 3)).toBe(9);
        expect(powerDigitSum(2, 15)).toBe(26);
    })

    it("Test solution", () => {
        expect(powerDigitSum(2, 1_000)).toBe(1366);
    })

})
