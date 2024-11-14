import { arrayOfPrimes } from "../src/problem07";

describe("Unit tests for problem06", () => {
    it("Test example works", () => {
        let answer:number[] = arrayOfPrimes(6);
        expect(answer.at(-1)).toBe(13);
    })

    it("Test solution", () => {
        let answer:number[] = arrayOfPrimes(10_001);
        expect(answer.at(-1)).toBe(104743);
    })

    it("Test first prime", () => {
        let answer:number[] = arrayOfPrimes(1);
        expect(answer.at(-1)).toBe(2);
    })
})
