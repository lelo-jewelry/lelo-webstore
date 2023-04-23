module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'medusa-public-images.s3.eu-west-1.amazonaws.com',
            'localhost'
        ]
    },
    env: {
        FEATURE_SEARCH_ENABLED: false
    }
};

console.log('next.config.js', JSON.stringify(module.exports, null, 2));
