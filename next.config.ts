import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'pt-br',
  }
};

export default withNextIntl(nextConfig);