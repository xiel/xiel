import { createProxyMiddleware } from 'http-proxy-middleware'
import { NextApiHandler } from 'next/types'

import { runMiddleware } from '../../../../helpers/runMiddleware'

const proxy = createProxyMiddleware({
  target: 'https://fonts.gstatic.com',
  changeOrigin: true,
  pathRewrite: { '^/api/fonts/static': '' },
})

const handle: NextApiHandler = async (req, res) => {
  await runMiddleware(req, res, proxy)
}

export default handle
