import { sumOfPrimes } from "../src/problem10";

describe("Unit tests for problem10", () => {
    it("Test example", () => {
        let answer:number = sumOfPrimes(10);
        expect(answer).toBe(17);
    })

    it("Test solution", () => {
        let answer:number = sumOfPrimes(2_000_000);
        expect(answer).toBe(142913828922);
    })

})
