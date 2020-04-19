const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [
        optimizedImages,
        {
            /* config for next-optimized-images */
            inlineImageLimit: 8192,
            imagesFolder: 'images',
            // imagesName: '[name]-[hash].[ext]',
            handleImages: ['jpeg'],
            optimizeImages: false,
        },
    ],
]);
