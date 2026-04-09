import { expect, test } from '@playwright/test'

test('locale: en / default', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('[css]')).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'Felix Leupold' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Clients & Partners' })).toBeVisible()
})

test('locale: de', async ({ page }) => {
  await page.goto('/de')
  await expect(page.locator('[css]')).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'Felix Leupold' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Kunden & Partner' })).toBeVisible()
})
