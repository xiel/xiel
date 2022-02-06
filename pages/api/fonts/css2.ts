import {
  createProxyMiddleware,
  responseInterceptor,
} from 'http-proxy-middleware'
import { NextApiHandler } from 'next/types'

import { runMiddleware } from '../../../helpers/runMiddleware'

const proxy = createProxyMiddleware({
  target: 'https://fonts.googleapis.com',
  changeOrigin: true,
  pathRewrite: { '^/api/fonts': '' },
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(async (responseBuffer) => {
    const response = responseBuffer.toString('utf8')
    return response.replaceAll('https://fonts.gstatic.com', '/api/fonts/static')
  }) as any,
})

const handle: NextApiHandler = async (req, res) => {
  await runMiddleware(req, res, proxy)
}

export default handle
