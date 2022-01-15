import { expect, test } from './utils/testFixtures'

test('basic test', async ({ page, queries: q }) => {
  await page.goto('/')
  await q.findByRole('heading', { name: 'Felix Leupold' })
  await q.findByRole('heading', { name: 'Clients & Partners' })

  expect(await page.screenshot()).toMatchSnapshot('landing.png')
})

test('visual test', async ({ page }) => {
  await page.goto('/')
  expect(await page.screenshot()).toMatchSnapshot('landing.png')
})

test('visual test - de', async ({ page }) => {
  await page.goto('/de')
  expect(await page.screenshot()).toMatchSnapshot('landing-de.png')
})
