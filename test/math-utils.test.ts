import { isPrime, productOfNumbers } from "../src/math-utils";

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
