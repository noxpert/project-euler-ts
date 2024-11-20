import { longestCollatzSequence, Result } from "../src/problem14";

describe("Unit tests for problem14", () => {
    it("Test small values", () => {
        expect(longestCollatzSequence(2)).toEqual(new Result(1, [1]));
        expect(longestCollatzSequence(2)).toEqual(new Result(1, [1]));
        expect(longestCollatzSequence(3)).toEqual(new Result(2, [2, 1]));
        expect(longestCollatzSequence(4)).toEqual(new Result(3, [3, 10, 5, 16, 8, 4, 2, 1]));
    })

    it("Test solution", () => {
        let answer:Result = longestCollatzSequence(1_000_000);
        expect(answer.startingNumber).toBe(837799);
    })

})
