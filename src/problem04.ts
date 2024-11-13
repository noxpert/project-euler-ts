// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers
// is 9009 = 91 * 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function reverse(value: string): string {
    return value.split('').reverse().join('');
}

function isPallindrome(value: string): boolean {
    return value === reverse(value)
}

export function largestPallindromeFromProduct(max1:number, max2:number): number {
    let largestPallindrome = 0;
    for (let i1 = max1; i1 > 0; i1--) {
        for (let i2 = max2; i2 > 0; i2--) {
            let product: number = i1 * i2;
            if (isPallindrome(`${product}`)) {
                if (product > largestPallindrome) {
                    largestPallindrome = product;
                }
            }
        }
    }
    return largestPallindrome;
}