// FILEPATH: /c:/Users/thivyruthra/source/repos/thivy/copilot-demo/app/demo/credit-card.test.ts
import { generateRandomCreditCardNumber } from "./credit-card";

describe("generateRandomCreditCardNumber", () => {
  it("should return a string", () => {
    const result = generateRandomCreditCardNumber();
    expect(typeof result).toBe("string");
  });

  it("should return a string of length 19", () => {
    const result = generateRandomCreditCardNumber();
    expect(result.length).toBe(19);
  });

  it("should return a string where every 5th character is a space", () => {
    const result = generateRandomCreditCardNumber();
    for (let i = 4; i < result.length; i += 5) {
      expect(result[i]).toBe(" ");
    }
  });

  it("should return a string where non-space characters are digits", () => {
    const result = generateRandomCreditCardNumber();
    for (let i = 0; i < result.length; i++) {
      if (i % 5 !== 4) {
        expect(!isNaN(Number(result[i]))).toBeTruthy();
      }
    }
  });
});
