const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

module.exports = withPlugins([withSvgr], {
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['picsum.photos', 'images.ctfassets.net'],
  },
});
