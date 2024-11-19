import { isPrime, factorsOfNumber, productOfNumbers } from "../src/math-utils";

describe("Unit tests for isPrime", () => {
    it("Test single digit numbers", () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
    })

    it("Test larger numbers", () => {
        expect(isPrime(33)).toBe(false);
        expect(isPrime(47)).toBe(true);
        expect(isPrime(49)).toBe(false);
        expect(isPrime(51)).toBe(false);
        expect(isPrime(59)).toBe(true);
        expect(isPrime(104743)).toBe(true);
    })
})

describe("Unit tests for productOfNumbers", () => {
    it("Test arrays with one number", () => {
        expect(productOfNumbers([1])).toBe(1);
        expect(productOfNumbers([37])).toBe(37);
        expect(productOfNumbers([912])).toBe(912);
    })

    it("Test arrays with three numbers", () => {
        expect(productOfNumbers([1, 2, 3])).toBe(6);
        expect(productOfNumbers([37, 21, 8])).toBe(6216);
        expect(productOfNumbers([912, 6, 74])).toBe(404928);
        expect(productOfNumbers([31, 0, 6935])).toBe(0);
    })

})

describe("Unit tests for factorsOfNumber", () => {
    it("Test factors of small numbers", () => {
        expect(factorsOfNumber(1)).toEqual([1]);
        expect(factorsOfNumber(2)).toEqual([1, 2]);
        expect(factorsOfNumber(3)).toEqual([1, 3]);
        expect(factorsOfNumber(4)).toEqual([1, 2, 4]);
        expect(factorsOfNumber(18)).toEqual([1, 2, 3, 6, 9, 18]);
    })

    it("Test larger numbers, including primes", () => {
        expect(factorsOfNumber(333)).toEqual([1, 3, 9, 37, 111, 333]);
        expect(factorsOfNumber(1000)).toEqual([1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500, 1000]);
        expect(factorsOfNumber(104743)).toEqual([1, 104743]);
    })

})
