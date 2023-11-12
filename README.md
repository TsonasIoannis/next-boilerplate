# Next.js Boilerplate

[![GitHub Super-Linter](https://github.com/TsonasIoannis/next-boilerplate/actions/workflows/linter.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on GitHub Pages

GitHub uses Jekyll by default to build static pages, and Jekyll ignores all files prefixed with \_ which Next.js uses.
By creating a `.nojekyll` file in the root of the repository we completely bypass Jekyll processing on GitHub Pages.

We need to update `next.config.js` to enable proper build on GitHub actions CI but maintain the same local development experience.
In order to achieve that we will use the GitHub Actions default environment variables, `GITHUB_ACTIONS` and `GITHUB_REPOSITORY`, to conditionally provide a configuration to Next compiler.
For GitHub actions to properly build and deploy the static assets we need the following configuration settings: `output`, `assetPrefix`, `basePath` and `images`.
The first `output: export` option is required as a substitute for the `next export` command to build the static assets.
We need to define an `assetPrefix` because GitHub uses Jekyll by default to build static pages, and Jekyll ignores all files prefixed with \_ which Next.js uses.
Next.js uses its own image optimization, which doesn’t play nicely with GitHub Pages by default. We change this to the `unoptimized` option which works properly.
Since GiHub Pages use a separate subdirectory for each page enabled repository we need to define `basePath` as the repository name so that the images are properly requested.

Next.js requires `<Image>` to manually include the `basePath` if it is defined in the configuration. To avoid manual repetition a [`prefix.ts`](./src/app/prefix.ts) is created which conditionally adds the repository name prefix.
All `<Image>` tags are updated to include the prefix.

Finally to enable GitHub Pages in the repository got to `Settings` and then `Pages` and in the `Build and deployment` section choose `GitHub Actions`.

Finally add the build and deploy [workflow](./.github/workflows/gh_pages_deploy.yml).

## Semantic Commit Messages

The Conventional Commits specification is a lightweight convention on top of commit messages.
It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.
This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

Format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:

* **build**: Changes that affect the build tools or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, Sauce Labs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bugfix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (whitespace, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

Commits are analysed in the semantic release action to define the next version and the entries to the Changelog.md

References:

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commit Messages Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)