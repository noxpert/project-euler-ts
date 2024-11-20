import { pathsThroughGrid } from "../src/problem15";

describe("Unit tests for problem15", () => {
    it("Test small values where width equals depth", () => {
        expect(pathsThroughGrid(0, 0)).toBe(1);
        expect(pathsThroughGrid(1, 1)).toBe(2);
        expect(pathsThroughGrid(2, 2)).toBe(6);
        expect(pathsThroughGrid(3, 3)).toBe(20);
        expect(pathsThroughGrid(4, 4)).toBe(70);
        expect(pathsThroughGrid(5, 5)).toBe(252);
    })

    it("Test small values with different width and depth", () => {
        expect(pathsThroughGrid(0, 1)).toBe(1);
        expect(pathsThroughGrid(0, 2)).toBe(1);
        expect(pathsThroughGrid(1, 0)).toBe(1);
        expect(pathsThroughGrid(2, 0)).toBe(1);
        expect(pathsThroughGrid(1, 2)).toBe(3);
        expect(pathsThroughGrid(2, 1)).toBe(3);
        expect(pathsThroughGrid(1, 3)).toBe(4);
        expect(pathsThroughGrid(3, 1)).toBe(4);
        expect(pathsThroughGrid(2, 3)).toBe(10);
        expect(pathsThroughGrid(3, 2)).toBe(10);
    })

    it("Test solution", () => {
        expect(pathsThroughGrid(20, 20)).toBe(137846528820);
    })

})
