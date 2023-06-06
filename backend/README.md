# lelo-webstore backend

A [MedusaJs](https://medusajs.com/) based backend for [lelo](https://lelo.jewelry). \
Includes a built-in [admin panel](https://lelo-backend-production.up.railway.app/adm) for managing the store.

## Local Development

- Install [Medusa CLI](https://docs.medusajs.com/cli/reference)

  ```bash
  npm install -g @medusajs/medusa-cli
  ```

- Copy the [.env.template](./.env.template) file to `.env` and fill in the required values

  ```bash
  cp .env.template .env
  ```

- Start the service

  ```bash
  cd backend
  medusa develop
  ```

## Admin Panel

The admin panel has a set of default credentials that can be used to login:
```
email: admin@medusa-test.com
password: supersecret
```

## Connecting to the existing database

Make sure that DATABASE_URL is set to the correct value in your .env file. If you are using the existing database, you can find the correct value in the [railway console](https://railway.app/project/lelo-backend-production/settings).

If the database has not been seeded, you can seed it by running the following command:

```bash
medusa seed -f ./data/seed.json
```

If the database contains data but you want to reset it, you can run the following command:

```bash
medusa migrate:reset
```

On the other hand, if the database is empty but there is no admin user set up, you can run the following command:

```bash
# Default credentials shown below
medusa user -e admin@medusa-test.com -p supersecret
```
