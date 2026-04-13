This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## HeroUI

```bash
sudo npm i -g heroui-cli
```

## Prisma
```bash
npx prisma@latest init --db
Need to install the following packages:
prisma@7.7.0
Ok to proceed? (y) y

npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@prisma/streams-local@0.1.2',
npm warn EBADENGINE   required: { bun: '>=1.3.6', node: '>=22.0.0' },
npm warn EBADENGINE   current: { node: 'v20.19.0', npm: '10.8.2' }
npm warn EBADENGINE }
This will create a project for you on console.prisma.io and requires you to be authenticated.
✔ Would you like to authenticate? Yes
Let's set up your Prisma Postgres database!
✔ Select your region: eu-west-3 - Europe (Paris)
✔ Enter a project name: tatar-kitchen
✔ Success! Your Prisma Postgres database is ready ✅

We created an initial schema.prisma file and a .env file with your DATABASE_URL environment variable already set.

--- Next steps ---

Go to https://pris.ly/ppg-init for detailed instructions.

1. Define your database schema
Open the schema.prisma file and define your first models. Check the docs if you need inspiration: https://pris.ly/ppg-init.

2. Apply migrations
Run the following command to create and apply a migration:
npx prisma migrate dev --name init

3. Manage your data
View and edit your data locally by running this command:
npx prisma studio
...or online in Console:
https://console.prisma.io/q3iw5a6fdrgj38pwfo9w8lcu/cmnsy2peg0jhd48fzt4b1mbbe/cmnsy2peg0jhb48fziozuupsc/studio

4. Send queries from your app
To access your database from a JavaScript/TypeScript app, you need to use Prisma ORM. Go here for step-by-step instructions: https://pris.ly/ppg-init
```

### синхронизаци моделей и базы
```bash
npm i prisma
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@prisma/streams-local@0.1.2',
npm warn EBADENGINE   required: { bun: '>=1.3.6', node: '>=22.0.0' },
npm warn EBADENGINE   current: { node: 'v20.19.0', npm: '10.8.2' }
npm warn EBADENGINE }

added 85 packages, and audited 591 packages in 11s

163 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
user1@kuzovkov-pc:~/projects/reactlearn/tatar-kitchen/frontend$ nvm install --lts
Installing latest LTS version.
Downloading and installing node v24.14.1...
Downloading https://nodejs.org/dist/v24.14.1/node-v24.14.1-linux-x64.tar.xz...
############################################################################################################################################################################################################ 100,0%
Computing checksum with sha256sum
Checksums matched!
Now using node v24.14.1 (npm v11.11.0)
user1@kuzovkov-pc:~/projects/reactlearn/tatar-kitchen/frontend$ nvm use --lts
Now using node v24.14.1 (npm v11.11.0)
user1@kuzovkov-pc:~/projects/reactlearn/tatar-kitchen/frontend$ node -v
v24.14.1
user1@kuzovkov-pc:~/projects/reactlearn/tatar-kitchen/frontend$ npm i prisma

up to date, audited 591 packages in 3s

163 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
user1@kuzovkov-pc:~/projects/reactlearn/tatar-kitchen/frontend$ prisma db push
prisma: command not found
user1@kuzovkov-pc:~/projects/reactlearn/tatar-kitchen/frontend$ npx prisma db push
Loaded Prisma config from prisma.config.ts.

Prisma schema loaded from prisma/schema.prisma.
Datasource "db": PostgreSQL database "tatarian_kitchen", schema "public" at "localhost:5432"

🚀  Your database is now in sync with your Prisma schema. Done in 121ms
```

### run prisma studio
```bash
npx prisma studio
Loaded Prisma config from prisma.config.ts.


Prisma Studio is running at: http://localhost:51212

```

## Authjs

https://authjs.dev/getting-started/installation?framework=Next.js

```bash
 npm install next-auth@beta
 npx auth secret

Add the following to your .env file:
# Auth Secret
BETTER_AUTH_SECRET=7d9c9d0903827e03748224f2038dbb70e87484eb5214cb9dcdbc4e4d973e23c5
user1@kuzovkov-pc:~/projects/reactlearn/tatar-kitchen/frontend$ npm run dev
```
