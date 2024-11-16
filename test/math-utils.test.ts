import { isPrime } from "../src/math-utils";

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
