const dotenv = require('dotenv');

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
    case 'production':
        ENV_FILE_NAME = '.env.production'; break;
    case 'staging':
        ENV_FILE_NAME = '.env.staging'; break;
    case 'test':
        ENV_FILE_NAME = '.env.test'; break;
    case 'development':
    default:
        ENV_FILE_NAME = '.env'; break;
}

try {
    dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });
} catch (e) {
}

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
    projectConfig: {
        jwtSecret: process.env.JWT_SECRET,
        redis_url: process.env.REDIS_URL || 'redis://localhost:6379',
        database_type: 'postgres',
        database_url: process.env.DATABASE_URL || 'postgres://localhost/medusa-store',
        store_cors: process.env.STORE_CORS || 'http://localhost:8000',
        admin_cors: process.env.ADMIN_CORS || 'http://localhost:7000,http://localhost:7001'
    },
    plugins: [
        `medusa-fulfillment-manual`,
        `medusa-payment-manual`,
        {
            resolve: "@medusajs/admin",
            /** @type {import('@medusajs/admin').PluginOptions} */
            options: {
                autoRebuild: true,
                path: 'adm'
            }
        }
        // {
        //   resolve: `medusa-payment-stripe`,
        //   options: {
        //     api_key: process.env.STRIPE_API_KEY || '',
        //     webhook_secret: process.env.STRIPE_WEBHOOK_SECRET || '',
        //   },
        // }
    ],
    modules: {
        eventBus: {
            resolve: "@medusajs/event-bus-redis",
            options: {
                redisUrl: process.env.REDIS_URL || 'redis://localhost:6379'
            }
        },
        cacheService: {
            resolve: "@medusajs/cache-redis",
            options: {
                redisUrl: process.env.REDIS_URL || 'redis://localhost:6379'
            }
        },
    }
};
