// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

export function findPythagoreanTripletWithSum(expectedSum: number): number[] {
    for (let a: number = 1; a < Math.floor(expectedSum / 3) + 1 ; a++) {
        for (let b: number = a + 1; b < Math.floor(expectedSum / 2) + 1; b++) {
            for (let c: number = b + 1; c < expectedSum - 2; c++) {
                if (a + b + c === expectedSum && a * a + b * b === c * c) {
                    return [a, b, c];
                }
            }
        }
    }
    return [];
}
