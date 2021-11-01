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
    // GitHub pages
    basePath: '/hypnerotomachia-poliphili',
    assetPrefix: '/hypnerotomachia-poliphili/',
    // // local
    //     basePath: '/home/elise/w/perso/hypnerotomachia-poliphili/docs',
    //     assetPrefix: '/home/elise/w/perso/hypnerotomachia-poliphili/docs/',
}