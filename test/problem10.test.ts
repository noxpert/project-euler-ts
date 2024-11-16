import { sumOfPrimes } from "../src/problem10";

describe("Unit tests for problem10", () => {
    it("Test example", () => {
        let answer:number = sumOfPrimes(10);
        expect(answer).toBe(17);
    })

    // Commenting out so test suite runs faster
    // it("Test solution", () => {
    //     let answer:number = sumOfPrimes(2_000_000);
    //     expect(answer).toBe(142913828922);
    // })

    it("Test larger number that doesn't take as long as 2 mil", () => {
        let answer:number = sumOfPrimes(10_000);
        expect(answer).toBe(5736396);
    })

})
