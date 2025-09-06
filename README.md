# node-all-the-things

A demonstration repo of a lot of great new native NodeJS features, like:

- [TypeScript](https://nodejs.org/en/learn/typescript/run-natively)
- [Test Runner](https://nodejs.org/api/test.html)
- [Import Aliases](https://nodejs.org/api/packages.html#imports)
- and more!

All in ESM. 💯

## Setup

1. Have Node (LTS) `>=22.18.0` installed (or run `nvm use`)
1. Clone the repo
1. Run `npm ci`

## Commands

To start the development server, using Node's native watch mode, run:

```sh
$ npm run dev
```

To start a production server, run:

```sh
$ npm start
```

To run tests:

```sh
$ npm run test
```

To check types, run:

```sh
$ npm run check:types
```

> ⚠️ _There is a [known issue](https://github.com/nodejs/node/issues/59163) in the test runner when needing to mock the same module multiple times in a single test suite.  Though there does appear to be a workaround in the linked issue._