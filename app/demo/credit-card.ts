const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

/**
 * Generates a random credit card number.
 *
 * @returns {string} The generated credit card number.
 */
export const generateRandomCreditCardNumber = () => {
  let creditCardNumber = "";
  for (let i = 0; i < MAX_DIGITS; i++) {
    creditCardNumber += Math.floor(Math.random() * 10);
    if (i % 4 === 3 && i < MAX_DIGITS - 1) {
      creditCardNumber += " ";
    }
  }
  return creditCardNumber;
};

/**
 * Generates a random expiry date for a credit card.
 * @returns {string} The generated expiry date in the format "MM/YY".
 */
export function generateRandomExpiryDate() {
  const month = Math.floor(Math.random() * 12) + 1;
  const year = Math.floor(Math.random() * 10) + 20;

  const yearFormat = year.toString().slice(0, EXPIRE_YEAR_LENGTH);

  return `${month}/${yearFormat}`;
}
