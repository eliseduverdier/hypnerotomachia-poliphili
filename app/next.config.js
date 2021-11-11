const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/styles')],
  },
  //  GitHub pages exports
  basePath: '/hypnerotomachia-poliphili',
  assetPrefix: '/hypnerotomachia-poliphili/',
}
