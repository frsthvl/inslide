# Contributing to Insli.de

Thank you for your interest in contributing to Insli.de! Your contributions are highly appreciated. This guide will help you get started with the development process.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development](#development)
3. [Building for Production](#building-for-production)
4. [Submitting Changes](#submitting-changes)

## Getting Started

To get started with contributing to Insli.de, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine:

    ```bash
    git clone https://github.com/frsthvl/inslide.git
    cd inslide
    ```

3. Create a new branch for your feature or bugfix:

    ```bash
    git checkout -b my-feature-branch
    ```

4. Install the project dependencies:

    ```bash
    npm install
    ```

## Development

### Setting Up Environment

Create a `.env` file in the root directory and set the `APP_URL` to the URL where the application is hosted. This is necessary for the application to run correctly.

### Running the Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

This will start the Nuxt.js development server, and you can begin making changes to the codebase.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

### Preview Production Build

To locally preview the production build, run:

```bash
npm run preview
```

This will start a local server to preview the production build of the application.

## Submitting Changes

1. Ensure your changes pass all tests and linting checks.
2. Commit your changes with a descriptive commit message:

    ```bash
    git commit -m "Add feature X"
    ```

3. Push your changes to your forked repository:

    ```bash
    git push origin my-feature-branch
    ```

4. Open a pull request on the original repository. Provide a clear description of your changes and any related issues.

## Additional Resources

- [Nuxt.js Documentation](https://nuxt.com/docs/getting-started/installation)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

Thank you for contributing to Insli.de!
