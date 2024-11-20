import { pathsThroughGrid } from "../src/problem15";

describe("Unit tests for problem14", () => {
    it("Test small values", () => {
        expect(pathsThroughGrid(1, 1)).toBe(1);
        expect(pathsThroughGrid(2, 2)).toBe(2);
        expect(pathsThroughGrid(3, 3)).toBe(6);
        expect(pathsThroughGrid(4, 4)).toBe(20);
    })

    it("Test solution", () => {
        expect(pathsThroughGrid(21, 21)).toBe(137846528820);
    })

})
