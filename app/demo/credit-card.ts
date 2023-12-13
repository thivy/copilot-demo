const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

/**
 * Generates a random credit card number.
 * @returns {string} The generated credit card number.
 */
export const generateRandomCreditCardNumber = () => {
  let ccNumber = "";
  for (let i = 0; i < MAX_DIGITS; i++) {
    ccNumber += Math.floor(Math.random() * 10);
    if (i % 4 === 3 && i < MAX_DIGITS - 1) {
      ccNumber += " ";
    }
  }
  return ccNumber;
};

/**
 * Generates a random expiry date for a credit card.
 * The expiry date is in the format "MM/YYYY".
 * @returns {string} The randomly generated expiry date.
 */
export function generateRandomExpiryDate() {
  const today = new Date();
  const year = today.getFullYear() + Math.floor(Math.random() * 10);
  const month = Math.floor(Math.random() * 12) + 1;
  return `${month}/${year}`;
}
