import { largestPallindromeFromProduct } from "../src/problem04";

describe("Unit tests for problem04", () => {
    it("Test example works", () => {
        let answer:number = largestPallindromeFromProduct(99, 99);
        expect(answer).toBe(9009);
    })

    it("Test solution", () => {
        let answer:number = largestPallindromeFromProduct(999, 999);
        expect(answer).toBe(906609);
    })

    it("Test single digit pallindrome", () => {
        let answer:number = largestPallindromeFromProduct(1, 1);
        expect(answer).toBe(1);
    })
})
