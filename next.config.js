module.exports = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
    trailingSlash: true,
    //  GitHub pages
    basePath: '/hypnerotomachia-poliphili',
    assetPrefix: '/hypnerotomachia-poliphili/',
    //  Local
    // basePath: '/home/elise/w/perso/hypnerotomachia-poliphili/docs',
    // assetPrefix: '/home/elise/w/perso/hypnerotomachia-poliphili/docs/',
}