# lelo-webstore

![lelo](https://github.com/lelo-jewelry/lelo-webstore/assets/3488482/20caaf3b-ba6f-46ff-b074-5f0955ed5f7f)

A monorepo for the entire ecommerce aspect of [lelo jewelry](https://lelo.jewelry). This repository contains the following projects:

- [backend](./backend) - A Node.js based backend for the store that runs on [Medusa](https://medusajs.com/)
- [storefront](./storefront) - A Next.js based storefront for clients to browse and purchase products
- [admin](./backend/) - A React based admin panel for managing the store

## Plugin integrations

- [Stripe](https://docs.medusajs.com/plugins/payment/stripe)
- [MeiliSearch](./search-provider/Readme.md)
- [Minio](./file-data/Readme.md)
- [Sendgrid](https://docs.medusajs.com/plugins/notifications/sendgrid)

## Local Development

In order for the store to work, an existing Postgres database and Redis instance are required to be running. Once running, proper urls must be provided to the backend and admin projects.

1. Start the backend project - see [backend Readme](./backend/Readme.md#local-development)

2. Start the admin project - see [admin Readme](./admin/Readme.md#local-development)

3. Start the storefront project - see [storefront Readme](./storefront/Readme.md#local-development)

## Railway Deployment

Deployment configuration is ready for [railway](https://railway.app/). Each project has a `railway.json` file that describes build configuration.

> NOTE: The configuration file does not specify any environment variables, so they must be set manually in the railway console.
