import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/website123' : '',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['relayora.test'],
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
