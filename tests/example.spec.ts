import { test } from './utils/testFixtures'

test('basic test', async ({ page, queries: q }) => {
  await page.goto('/')
  await q.findByRole('heading', { name: 'Felix Leupold' })
  await q.findByRole('heading', { name: 'Clients & Partners' })
})
