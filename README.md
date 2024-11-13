# Insli.de – automatic markdown presentations

This is a simple Nuxt.js application that allows you to automatically create presentations using markdown files instantly inspired by [Simple Slides](https://github.com/alkrauss48/simple-slides).

Use it [online](https://insli.de) (hosted with [NuxtHub](https://hub.nuxt.com/) on Cloudflare) or install it yourself using this repository.

> **Note:** This project is still in development and may not be stable. Tests are missing and code might be messy.

## Features

-   Full [Tailwind](https://tailwindcss.com/) CSS support
-   Automatically create slides from markdown files
-   Fetch markdown files from a public URL
-   Customizable using frontmatter
-   No data stored

## Setup

Make sure to create a `.env` file and set the `APP_URL` to the URL where the application is hosted.

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
