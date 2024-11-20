import { pathsThroughGrid } from "../src/problem15";

describe("Unit tests for problem14", () => {
    it("Test small values where width equals depth", () => {
        expect(pathsThroughGrid(1, 1)).toBe(1);
        expect(pathsThroughGrid(2, 2)).toBe(2);
        expect(pathsThroughGrid(3, 3)).toBe(6);
        expect(pathsThroughGrid(4, 4)).toBe(20);
        expect(pathsThroughGrid(5, 5)).toBe(70);
        expect(pathsThroughGrid(6, 6)).toBe(252);
    })

    it("Test small values with different width and depth", () => {
        expect(pathsThroughGrid(1, 2)).toBe(1);
        expect(pathsThroughGrid(1, 3)).toBe(1);
        expect(pathsThroughGrid(2, 1)).toBe(1);
        expect(pathsThroughGrid(3, 1)).toBe(1);
        expect(pathsThroughGrid(2, 3)).toBe(3);
        expect(pathsThroughGrid(3, 2)).toBe(3);
        expect(pathsThroughGrid(2, 4)).toBe(4);
        expect(pathsThroughGrid(4, 2)).toBe(4);
        expect(pathsThroughGrid(3, 4)).toBe(10);
        expect(pathsThroughGrid(4, 3)).toBe(10);
    })

    it("Test solution", () => {
        expect(pathsThroughGrid(21, 21)).toBe(137846528820);
    })

})
