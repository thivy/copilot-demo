const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

export const generateRandomCreditCardNumber = () => {
  // generate random number in the format 1234 1234 1234 1234
  let ccNumber = "";
  for (let i = 0; i < MAX_DIGITS; i++) {
    if (i % 4 === 0 && i !== 0) {
      ccNumber += " ";
    }
    ccNumber += Math.floor(Math.random() * 10);
  }
  return ccNumber;
};

export function generateRandomExpiryDate() {
  const currentYear = new Date().getFullYear();
  const randomYear = Math.floor(Math.random() * 10) + currentYear;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  return `${randomMonth}/${randomYear}`;
}
