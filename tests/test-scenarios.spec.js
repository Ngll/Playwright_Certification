const { test, expect } = require('@playwright/test');

test('Scenario 1: Simple Form Demo', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click('text=Simple Form Demo');
  await expect(page).toHaveURL(/.*simple-form-demo/);

  const message = 'Welcome to LambdaTest';
  await page.fill('#user-message', message);
  await page.click('#showInput');
  const result = await page.locator('#message').textContent();

  expect(result).toContain(message);
});

test('Scenario 2: Slider to 95', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click('text=Drag & Drop Sliders');

  const slider = page.locator("input[type='range']").nth(2);
  for (let i = 0; i < 80; i++) {
    await slider.press('ArrowRight');
  }

  const value = await page.locator('#rangeSuccess').textContent();
  expect(value).toBe('95');
});

test('Scenario 3: Input Form Submit', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click('text=Input Form Submit');

  await page.click('text=Submit');
  await expect(page.locator('input[name="name"]')).toHaveAttribute('required', '');

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[placeholder="Email"]', 'john@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="company"]', 'LambdaTest');
  await page.fill('input[name="website"]', 'https://example.com');
  await page.selectOption('select[name="country"]', { label: 'United States' });
  await page.fill('input[name="city"]', 'New York');
  await page.fill('input[placeholder="Address 1"]', '123 Test St');
  await page.fill('input[placeholder="Address 2"]', 'Apt 1');
  await page.fill('input[placeholder="State"]', 'NY');
  await page.fill('input[placeholder="Zip code"]', '10001');

  await page.click('text=Submit');
  const successMsg = await page.locator('.success-msg').textContent();
  expect(successMsg).toContain('Thanks for contacting us, we will get back to you shortly.');
});
