# Insli.de – Automatic Markdown Presentations

This is a simple Nuxt.js application that allows you to automatically create presentations using markdown files instantly inspired by [Simple Slides](https://github.com/alkrauss48/simple-slides).

Use it [online](https://insli.de) (hosted with [NuxtHub](https://hub.nuxt.com/) on Cloudflare) or install it yourself using this repository.

> **Note:** This project is still in development and may not be stable. Tests are missing and code might be messy.

## Features

-   Full [Tailwind](https://tailwindcss.com/) CSS support
-   Automatically create slides from markdown files
-   Fetch markdown files from a public URL
-   Customizable using frontmatter
-   No data stored

## Selfhosting

You can host the application on your own server or locally using Node.js or Docker to use local markdown files or fetch them from a public URL.

### Node.js

You can install the application on your own server by cloning this repository and running the following commands:

Requirements:
- Node.js 18+
- npm 7+

```bash
npm install

npm run build

node .output/server/index.mjs
```

### Docker

You can use the latest Docker image [frsthvl/inslide](https://hub.docker.com/r/frsthvl/inslide) to deploy your own instance.

By default the port 3000 is exposed, but you can change it by setting the `NUXT_PORT` environment variable.

You can also simply use the following `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  inslide:
    image: 'frsthvl/inslide'
    ports:
      - '3000:3000'
    environment:
      NUXT_HOST: 0.0.0.0
      NUXT_PORT: 3000
      NODE_ENV: production
      APP_URL: 'https://YOUR-URL'
    restart: always
```

## Development

Make sure to create a `.env` file and set the `APP_URL` to the URL where the application is hosted.

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
