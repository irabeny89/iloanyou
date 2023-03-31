# I Loan You

A P2P loan app that allows users to signup, credit wallet and loan other users.

## How to Start

After cloning and installing dependencies, then run the start or dev script:

```bash
# start dev server and run `pnpm generate:watch`
# in another terminal for graphql codegen
pnpm dev
```

```bash
# start the server by compiling and running the javascript.
pnpm start
```

> N.B: any Package Manager can be used eg `npm` or `yarn`.
> Local development is on port 4000 but can be edited - [src/index.ts](src/index.ts)

## Features

Many tools already installed; this can be extended even further:

- Code Testing
- Vulnerabilty Testing
- Hashing and Encryption
- Release Versioning
- Angular Semantic Versioning
- Code Documentations
- Pre-Commit Hooks
- Code Styling
- Linting
- Typescript
- GraphQL and REST
- Email Services
- etc

> Check the [package.json](package.json) file for full list of dependencies and some configurations.

### Code Documentations

The documentation files can be generated with `pnpm docs` and the folder named `docs` will be at the root directory.
Open the index.html file with a browser to see its contents.

Run the command to generate code docs:

```bash
pnpm docs
```

### Automated Tests

Unit and integration tests can be handled with [Jest](https://jest.io).
Run the script to run test:

```bash
pnpm test
```

To test vulnerabilties in packages we can use package managers audit command like `npm audit` or `pnpm audit` etc. But we have Snyk setup locally and GitHub CodeQL (Security tab on GitHub) on Remote to scan for our repository vulnerabilities.
Run the script setup in [package.json](package.json) file

```bash
# runs a script specified to run the snyk test command.
pnpm pentest
```

> N.B: Ensure you have SNYK_TOKEN setup as an environment variable(ensure .env files are git ignored) locally and on Github secrets environment.

### Email Service

- [Nodemailer](https://nodemailer.com) is the package used to handle email service integration.

### Continuous Integration / Continuous Delivery

There are [Github](https://github.com) Actions to handle unit and integration tests, vulnerability tests, build tests, and release versioning.

Please before you push your commits use changesets/cli to write your changelogs e.g `pnpm changeset` and follow the prompts. The versioning will be handled by the GitHub Actions Release workflow.

> N.B: make sure you have your [Github](https://github.com) secret tokens for versioning and vulnerability tests.

---

Resources:

- [GitHub](https://github.com)
- [Snyk](https://snyk.io)
- [Nodemailer](https://nodemailer.com)
- [Changesets](https://github.com/changesets/changesets)
- [Apollo GraphQL](https://apollographql.com)
