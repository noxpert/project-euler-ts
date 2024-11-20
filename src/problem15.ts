// Starting in the top left corner of a 2x2 grid,
// and only being able to move to the right and down,
// there are exactly 6 routes to the bottom right corner.
//
// How many such routes are there through a 20x20 grid?

export function pathsThroughGrid(width: number, depth: number): number {
    if (width === 1 || depth === 1) {
        return 1;
    }
    return pathsThroughGrid(width - 1, depth) + pathsThroughGrid(width, depth - 1);
}
