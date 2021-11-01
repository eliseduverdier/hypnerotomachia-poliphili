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
    assetPrefix: 'hypnerotomachia-poliphili',
    env: {
        BACKEND_URL: 'hypnerotomachia-poliphili',
    },
    // assetPrefix: '/home/elise/w/perso/hypnerotomachia-poliphili/docs',
    // env: {
    //     BACKEND_URL: '/home/elise/w/perso/hypnerotomachia-poliphili/docs',
    // },
}