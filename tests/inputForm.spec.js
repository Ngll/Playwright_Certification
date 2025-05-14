import { test, expect } from '@playwright/test';

test('Input Form Submit - Validations and Submit', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Input Form Submit');
  await page.click('text=Submit');
  await expect(page.locator('.help-block')).toContainText('Please fill in the fields');

  await page.fill('[name="name"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="password"]', 'password123');
  await page.fill('[name="company"]', 'LambdaTest');
  await page.fill('[name="website"]', 'https://lambdatest.com');
  await page.selectOption('[name="country"]', { label: 'United States' });
  await page.fill('[name="city"]', 'New York');
  await page.fill('[name="address1"]', '123 Broadway');
  await page.fill('[name="address2"]', 'Suite 100');
  await page.fill('[name="state"]', 'NY');
  await page.fill('[name="zip"]', '10001');

  await page.click('button[type="submit"]');
  await expect(page.locator('#success_message')).toHaveText(/Thanks for contacting us/i);
});
