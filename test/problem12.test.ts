import { triangleNumberWithExpectedNumberOfFactors } from "../src/problem12";

describe("Unit tests for problem12", () => {
    it("Test small values", () => {
        let answer:number = triangleNumberWithExpectedNumberOfFactors(1);
        expect(answer).toBe(1);
    })

    it("Test example", () => {
        let answer:number = triangleNumberWithExpectedNumberOfFactors(4);
        expect(answer).toBe(6);
    })

    // Comment out working solution test for to shorten test suite runtime
    // it("Test solution", () => {
    //     let answer:number = triangleNumberWithExpectedNumberOfFactors(501);
    //     expect(answer).toBe(76576500);
    // })

})
