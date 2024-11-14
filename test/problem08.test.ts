import { findLargestProduct } from "../src/problem08";

const largeNumberStringPart01:  string = "73167176531330624919225119674426574742355349194934";
const largeNumberStringPart02:  string = "96983520312774506326239578318016984801869478851843";
const largeNumberStringPart03:  string = "85861560789112949495459501737958331952853208805511";
const largeNumberStringPart04:  string = "12540698747158523863050715693290963295227443043557";
const largeNumberStringPart05:  string = "66896648950445244523161731856403098711121722383113";
const largeNumberStringPart06:  string = "62229893423380308135336276614282806444486645238749";
const largeNumberStringPart07:  string = "30358907296290491560440772390713810515859307960866";
const largeNumberStringPart08:  string = "70172427121883998797908792274921901699720888093776";
const largeNumberStringPart09:  string = "65727333001053367881220235421809751254540594752243";
const largeNumberStringPart10:  string = "52584907711670556013604839586446706324415722155397";
const largeNumberStringPart11:  string = "53697817977846174064955149290862569321978468622482";
const largeNumberStringPart12:  string = "83972241375657056057490261407972968652414535100474";
const largeNumberStringPart13:  string = "82166370484403199890008895243450658541227588666881";
const largeNumberStringPart14:  string = "16427171479924442928230863465674813919123162824586";
const largeNumberStringPart15:  string = "17866458359124566529476545682848912883142607690042";
const largeNumberStringPart16:  string = "24219022671055626321111109370544217506941658960408";
const largeNumberStringPart17:  string = "07198403850962455444362981230987879927244284909188";
const largeNumberStringPart18:  string = "84580156166097919133875499200524063689912560717606";
const largeNumberStringPart19:  string = "05886116467109405077541002256983155200055935729725";
const largeNumberStringPart20:  string = "71636269561882670428252483600823257530420752963450";

const largeNumberString: string = largeNumberStringPart01.concat(
    largeNumberStringPart02,
    largeNumberStringPart03,
    largeNumberStringPart04,
    largeNumberStringPart05,
    largeNumberStringPart06,
    largeNumberStringPart07,
    largeNumberStringPart08,
    largeNumberStringPart09,
    largeNumberStringPart10,
    largeNumberStringPart11,
    largeNumberStringPart12,
    largeNumberStringPart13,
    largeNumberStringPart14,
    largeNumberStringPart15,
    largeNumberStringPart16,
    largeNumberStringPart17,
    largeNumberStringPart18,
    largeNumberStringPart19,
    largeNumberStringPart20
);

describe("Unit tests for problem08", () => {
    it("Test example works from string", () => {
        let answer:number = findLargestProduct(largeNumberString, 4);
        expect(answer).toBe(5832);
    })

    it("Test solution from string", () => {
        let answer:number = findLargestProduct(largeNumberString, 13);
        expect(answer).toBe(23514624000);
    })

    it("Test product of one digit from number", () => {
        let answer:number = findLargestProduct(12345678987, 1);
        expect(answer).toBe(9);
    })

    it("Test product of two digits from number", () => {
        let answer:number = findLargestProduct(106752910, 2);
        expect(answer).toBe(42);
    })
})
