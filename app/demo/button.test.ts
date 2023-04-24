import { expect, test } from "@playwright/test";
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

// create a playwright test that checks if all the buttons on this page have the text that is of prime number
test("Check if all the buttons have the text that is of prime number", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  const buttons = await page.$$("button");
  for (const button of buttons) {
    const text = await button.innerText();
    expect(primeNumbers.includes(text.length)).toBeTruthy();
  }
});
