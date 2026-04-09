/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
