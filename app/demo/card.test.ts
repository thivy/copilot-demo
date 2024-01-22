import {
  generateRandomCreditCardNumber,
  generateRandomExpiryDate,
} from "./credit-card";

describe("Credit Card Generator", () => {
  test("generateRandomCreditCardNumber generates a string", () => {
    const result = generateRandomCreditCardNumber();
    expect(typeof result).toBe("string");
  });

  test("generateRandomCreditCardNumber generates a string of length 19", () => {
    const result = generateRandomCreditCardNumber();
    expect(result.length).toBe(19);
  });

  test("generateRandomExpiryDate generates a string", () => {
    const result = generateRandomExpiryDate();
    expect(typeof result).toBe("string");
  });

  test("generateRandomExpiryDate generates a string in the format MM/YYYY", () => {
    const result = generateRandomExpiryDate();
    const regex = /^(0[1-9]|1[0-2])\/(20[2-9][0-9])$/;
    expect(result).toMatch(regex);
  });
});
