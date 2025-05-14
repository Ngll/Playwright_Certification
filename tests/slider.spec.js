import { test, expect } from '@playwright/test';

test('Drag & Drop Sliders - Set to 95', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Drag & Drop Sliders');
  const slider = page.locator("input[type='range'][value='15']");
  await slider.focus();
  // Move slider to 95 via keyboard or JS
  await page.evaluate(el => el.value = 95, await slider.elementHandle());
  await page.dispatchEvent("input[type='range'][value='15']", 'change');
  const value = await page.locator('#rangeSuccess').textContent();
  expect(value).toBe('95');
});
