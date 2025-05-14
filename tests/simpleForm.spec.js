import { test, expect } from '@playwright/test';

test('Simple Form Demo - Message Display', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Simple Form Demo');
  await expect(page).toHaveURL(/.*simple-form-demo/);

  const message = "Welcome to LambdaTest";
  await page.fill('#user-message', message);
  await page.click('#showInput');
  const output = await page.textContent('#message');
  expect(output).toContain(message);
});
