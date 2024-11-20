// Starting in the top left corner of a 2x2 grid,
// and only being able to move to the right and down,
// there are exactly 6 routes to the bottom right corner.
//
// How many such routes are there through a 20x20 grid?
//
//         3, 3 6
//         1 + 1 + 2 + 2
//         2 + 2 + 1 + 1
//         4, 4 20
//         1 + 1 + 2 + 2 + 2 + 3 + 3 + 3 + 3
//         3 + 3 + 2 + 2 + 2 + 2 + 1 + 1 + 1 + 1 + 1 + 1
//         5, 5 70
//         4+4 + 3+3+3+3 + 2+2+2+2+2+2 + 1+1+1+1+1+1+1+1 = 40
//         4*2 + 3*5 + 2*8 + 1*11 = 50
//         4*2 + 3*6 + 2*10 + 1*14 = 60
//         4*2 + 3*7 + 2*12 + 1*17 = 70
//         4+4+4+4 + 3+3+3+3+3+3+3+3 + 2+2+2+2+2+2+2+2+2 + 1+1+1+1+1+1+1+1+1+1+1 = 54
//         16        24                24

let cache: GridPath[] = []

class GridPath {
    d1: number;
    d2: number;
    paths: number;

    constructor(dimension1: number, dimension2: number, paths: number) {
        this.d1 = dimension1;
        this.d2 = dimension2;
        this.paths = paths;
    }

    matches(dim1: number, dim2: number): boolean {
        return (this.d1 === dim1 && this.d2 === dim2);
    }
}

export function pathsThroughGrid(width: number, depth: number): number {
    return recursiveWithCaching(width, depth);
}

// Takes ~1 seconds on M1 Pro MBP
function recursiveWithCaching(width: number, depth: number): number {
    if (width === 0 || depth === 0) {
        return 1;
    }
    for (let i = 0; i < cache.length; i++) {
        if (cache[i].matches(width, depth)) {
            return cache[i].paths;
        }
    }
    let newGridPath: GridPath = new GridPath(width, depth, recursiveWithCaching(width - 1, depth) + recursiveWithCaching(width, depth - 1));
    cache.push(newGridPath);
    return newGridPath.paths;
}

// Takes ~20 minutes on M1 Pro MBP
function recursive(width: number, depth: number): number {
    if (width === 1 || depth === 1) {
        return 1;
    }
    return recursive(width - 1, depth) + recursive(width, depth - 1);
}

// Takes ~103 seconds on M1 Pro MBP
function recursivePlus(width: number, depth: number): number {
    if (width === 1 || depth === 1) {
        return 1;
    } else if (width === 6 && depth == 6) {
        return 252;
    } else if ((width === 5 && depth == 6) || (width === 6 && depth == 5)) {
        return 126;
    } else if ((width === 4 && depth == 6) || (width === 6 && depth == 4)) {
        return 56;
    } else if ((width === 3 && depth == 6) || (width === 6 && depth == 3)) {
        return 21;
    } else if ((width === 2 && depth == 6) || (width === 6 && depth == 2)) {
        return 6;
    } else if (width === 5 && depth == 5) {
        return 70;
    } else if ((width === 4 && depth == 5) || (width === 5 && depth == 4)) {
        return 35;
    } else if ((width === 3 && depth == 5) || (width === 5 && depth == 3)) {
        return 15;
    } else if ((width === 2 && depth == 5) || (width === 5 && depth == 2)) {
        return 5;
    } else if (width === 4 && depth == 4) {
        return 20;
    } else if ((width === 3 && depth == 4) || (width === 4 && depth == 3)) {
        return 10;
    } else if ((width === 2 && depth == 4) || (width === 4 && depth == 2)) {
        return 4;
    }
    return recursivePlus(width - 1, depth) + recursivePlus(width, depth - 1);
}
