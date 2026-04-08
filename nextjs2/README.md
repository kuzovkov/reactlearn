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

## Get started

```bash
npx create-next-app@latest my-app --yes
OR 
npx create-next-app@latest #interact mode
cd my-app
npm run dev

# Example
npx create-next-app@latest
✔ What is your project named? … .
✔ Would you like to use the recommended Next.js defaults? › No, customize settings
✔ Would you like to use TypeScript? … No / Yes
✔ Which linter would you like to use? › None
✔ Would you like to use React Compiler? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
✔ What import alias would you like configured? … @/*
✔ Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? … No / Yes
Creating a new Next.js app in /home/user1/projects/reactlearn/nextjs.

Using npm.

Initializing project with template: app 


Installing dependencies:
- next
- react
- react-dom


added 22 packages, and audited 23 packages in 17s

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Generating route types...
✓ Types generated successfully

Success! Created nextjs at /home/user1/projects/reactlearn/nextjs

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


### export

```bash
npm run build

> nextjs@0.1.0 build
> next build

⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
 We detected multiple lockfiles and selected the directory of /home/user1/package-lock.json as the root directory.
 To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
   See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory for more information.
 Detected additional lockfiles: 
   * /home/user1/projects/reactlearn/nextjs2/package-lock.json
   * /home/user1/projects/reactlearn/package-lock.json

▲ Next.js 16.2.2 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 3.1s
✓ Finished TypeScript in 93ms    
✓ Collecting page data using 8 workers in 852ms    
post: {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
post: {
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae\n' +
    'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
    'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
    'qui aperiam non debitis possimus qui neque nisi nulla'
}
post: {
  userId: 1,
  id: 3,
  title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  body: 'et iusto sed quo iure\n' +
    'voluptatem occaecati omnis eligendi aut ad\n' +
    'voluptatem doloribus vel accusantium quis pariatur\n' +
    'molestiae porro eius odio et labore et velit aut'
}
post: {
  userId: 1,
  id: 5,
  title: 'nesciunt quas odio',
  body: 'repudiandae veniam quaerat sunt sed\n' +
    'alias aut fugiat sit autem sed est\n' +
    'voluptatem omnis possimus esse voluptatibus quis\n' +
    'est aut tenetur dolor neque'
}
post: {
  userId: 1,
  id: 4,
  title: 'eum et est occaecati',
  body: 'ullam et saepe reiciendis voluptatem adipisci\n' +
    'sit amet autem assumenda provident rerum culpa\n' +
    'quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n' +
    'quis sunt voluptatem rerum illo velit'
}
post: {
  userId: 1,
  id: 10,
  title: 'optio molestias id quia eum',
  body: 'quo et expedita modi cum officia vel magni\n' +
    'doloribus qui repudiandae\n' +
    'vero nisi sit\n' +
    'quos veniam quod sed accusamus veritatis error'
}
post: {
  userId: 1,
  id: 6,
  title: 'dolorem eum magni eos aperiam quia',
  body: 'ut aspernatur corporis harum nihil quis provident sequi\n' +
    'mollitia nobis aliquid molestiae\n' +
    'perspiciatis et ea nemo ab reprehenderit accusantium quas\n' +
    'voluptate dolores velit et doloremque molestiae'
}
post: {
  userId: 1,
  id: 9,
  title: 'nesciunt iure omnis dolorem tempora et accusantium',
  body: 'consectetur animi nesciunt iure dolore\n' +
    'enim quia ad\n' +
    'veniam autem ut quam aut nobis\n' +
    'et est aut quod aut provident voluptas autem voluptas'
}
post: {
  userId: 1,
  id: 8,
  title: 'dolorem dolore est ipsam',
  body: 'dignissimos aperiam dolorem qui eum\n' +
    'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
    'quaerat magni maiores excepturi\n' +
    'ipsam ut commodi dolor voluptatum modi aut vitae'
}
post: {
  userId: 1,
  id: 7,
  title: 'magnam facilis autem',
  body: 'dolore placeat quibusdam ea quo vitae\n' +
    'magni quis enim qui quis quo nemo aut saepe\n' +
    'quidem repellat excepturi ut quia\n' +
    'sunt ut sequi eos ea sed quas'
}
✓ Generating static pages using 8 workers (16/16) in 1382ms
✓ Finalizing page optimization in 271ms    

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ƒ /api/data
└ ● /post/[id]
  ├ /post/1
  ├ /post/2
  ├ /post/3
  └ [+7 more paths]


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

### open with local server
```bash
npx serve@latest out
Need to install the following packages:
serve@14.2.6
Ok to proceed? (y) y


   ┌───────────────────────────────────────────┐
   │                                           │
   │   Serving!                                │
   │                                           │
   │   - Local:    http://localhost:3000       │
   │   - Network:  http://192.168.0.116:3000   │
   │                                           │
   │   Copied local address to clipboard!      │
   │                                           │
   └───────────────────────────────────────────┘

 HTTP  4/8/2026 1:22:03 PM ::1 GET /
 HTTP  4/8/2026 1:22:03 PM ::1 Returned 200 in 40 ms
 HTTP  4/8/2026 1:22:03 PM ::1 GET /.well-known/appspecific/com.chrome.devtools.json
 HTTP  4/8/2026 1:22:03 PM ::1 Returned 404 in 3 ms
 HTTP  4/8/2026 1:22:03 PM ::1 GET /_next/static/media/797e433ab948586e-s.p.0.q-h669a_dqa.woff2
 HTTP  4/8/2026 1:22:03 PM ::1 GET /_next/static/media/caa3a2e1cccd8315-s.p.16t1db8_9y2o~.woff2
 HTTP  4/8/2026 1:22:03 PM ::1 GET /_next/static/chunks/08gyhcj2j~iim.css
 HTTP  4/8/2026 1:22:03 PM ::1 Returned 200 in 4 ms
 HTTP  4/8/2026 1:22:03 PM ::1 GET /_next/static/chunks/07-_94g3gw-i~.css
 HTTP  4/8/2026 1:22:03 PM ::1 Returned 200 in 5 ms
...
```

