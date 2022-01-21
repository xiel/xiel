import { test } from './utils/testFixtures'

test('locale: en / default', async ({ page, queries: q }) => {
  await page.goto('/')
  await q.findByRole('heading', { name: 'Felix Leupold' })
  await q.findByRole('heading', { name: 'Clients & Partners' })
})

test('locale: de', async ({ page, queries: q }) => {
  await page.goto('/de')
  await q.findByRole('heading', { name: 'Felix Leupold' })
  await q.findByRole('heading', { name: 'Kunden & Partner' })
})
