/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'lelo.jewelry',
            'lelo-file-data-production.up.railway.app',
            'localhost'
        ]
    },
    env: {
        FEATURE_SEARCH_ENABLED: false
    }
};

console.log('next.config.js', JSON.stringify(module.exports, null, 2));
