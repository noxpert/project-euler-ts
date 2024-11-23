// 2^15=32768 and the sum of its digits is:
// 3 + 2 + 7 + 6 + 8 = 26
//
// What is the sum of the digits of the number 2^1000?

export function powerDigitSum(base: number, exponent: number): number {
    let value: bigint = BigInt(base)**BigInt(exponent);
    let numberString: string = value.toString();
    let sum: number = 0;
    numberString.split("").forEach((char: string)=> {
        sum += Number(char);
    });
    return sum;
}
