# react-dapps-boilerplate

<a href="http://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square" height="20"></a>
<a href="https://twitter.com/younesmjl"><img src="https://img.shields.io/twitter/follow/younesmjl.svg?style=social&label=Follow&maxAge=3600" height="20"></a>
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/younesmjl/21183273cef6a16459dd73c2314520c6/raw/react-dapps-badges.json)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

The web's most popular front-end template for building decentralized application with
[React](https://reactjs.org/), [ethers.js](https://docs.ethers.io/), and
[Solidity](https://soliditylang.org/).

## Features

### Backend
- 📦 Hardhat - Ethereum development environment for professionals
- 🦾 TypeChain Hardhat plugin - Automatically generate TypeScript bindings for smartcontracts while using Hardhat.


### Frontend
- ⚡️ React 18, Vite, Yarn, ESBuild - born with fastness
- 🔥 Layout system
- 🔥 Path aliases (@Components, @Layout, @Pages)
- 🎨 Components Library with Mantine
- 🛠️ Pre-configured with code quality tools: ESLint, Prettier, TypeScript, Cypress, Vitest, Github Actions
- ⚙️ Deploy on Vercel, zero-config

---

## Directory Structure

`├──` [`.github`](.github) — GitHub configuration including CI/CD workflows<br>
`├──` [`.vscode`](.vscode) — VSCode settings including code snippets, recommended extensions etc.<br>
`├──` [`.husky`](./husky) — Git Hooks, for code quality<br>
`├──` [`contracts`](./contracts) — Solidity contracts<br>
`├──` [`scripts`](./src/scripts) — Script to deploy contracts <br>
`├──` [`test`](./src/test) — Script to test contracts <br>
`├──` [`typechain`](./src/typechain) — Declaration files  for Contracts <br>
`├──` [`src`](./src) —  dapp frontend <br>
`├────` [`artifacts`](./src/artifacts) — compiled artifacts <br>
`├────` [`assets`](./src/assets) — Assets such as css, sass, img files<br>
`├────` [`components`](./src/components) — Reusable components for pages and layout<br>
`├────` [`hooks`](./hooks) — React hooks such as ``, ``, etc.<br>
`├────` [`pages`](./pages) — Contains your Application Views and Routes<br>
`├──` [`index.html`](./index.html) —  application entry point<br>

## Tech Stack

- [Hardhat](https://hardhat.org/), [ethers.js](https://docs.ethers.io/),
[TypeChain](https://github.com/dethcrypto/TypeChain/), [Waffle](https://getwaffle.io/)
- [React](https://reactjs.org/), [React Router](https://reactrouter.com/),
  [Mantine](https://mantine.dev/), [Mantine UI](https://ui.mantine.dev/), [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/),
  [ESLint](https://eslint.org/), [Prettier](https://prettier.io/),
  [Yarn](https://yarnpkg.com/),
  [Vite](https://vitejs.dev/)

## Requirements

- [Node.js](https://nodejs.org/) v16 or newer, [Yarn](https://yarnpkg.com/) package manager
- [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

## Getting Started

- Clone the repo<br />
  `git clone -o seed -b main --single-branch https://github.com/younesmjl/react-dapps-boilerplate.git`
- Install project dependencies — `yarn install`
- Compile your contract — `npx hardhat compile`
- Starts a JSON-RPC server — `npx hardhat node`
- Deploy your contract — `npx hardhat run scripts/deploy.ts --network localhost`
- Launch the app — `yarn dev`, it will become available at [http://localhost:3000](http://localhost:3000/)

**IMPORTANT**: Ensure that VSCode is using the workspace versions of TypeScript and ESLint.

![](https://files.tarkus.me/typescript-workspace.png)

## Scripts

### Backend
`npx hardhat accounts` — Prints the list of accounts
`npx hardhat compile` — Compiles the entire project, building all artifacts
`npx hardhat clean` — Clears the cache and deletes all artifacts
`npx hardhat test` — Runs mocha tests
`npx hardhat node` — Starts a JSON-RPC server on top of Hardhat Network
`npx hardhat help` — Prints this message
`REPORT_GAS=true npx hardhat test` — 
`npx hardhat coverage` — 
`npx hardhat run scripts/deploy.ts` — Runs a user-defined script after compiling
`TS_NODE_FILES=true npx ts-node scripts/deploy.ts` — 
`npx eslint '**/\*.{js,ts}'` — 
`npx eslint '**/_.{js,ts}' --fix` — 
`npx prettier '\*\*/_.{json,sol,md}' --check` — 
`npx prettier '**/\*.{json,sol,md}' --write` — 
`npx solhint 'contracts/**/_.sol'` — 
`npx solhint 'contracts/\*\*/_.sol' --fix` — 

### Frontend
- `yarn dev` — Launches the app in development mode on [`http://localhost:3000`](http://localhost:3000/)
- `yarn build` — Compiles and bundles the app for deployment
- `yarn preview` — Preview your build app
- `yarn prepare` — Install and configure husky hooks system
- `yarn commit` — Run commitizen command line to receive assistance in drafting commit

## How to Deploy

...

## How to Update

- `yarn set version latest` — Bump Yarn to the latest version
- `yarn upgrade-interactive` — Update Node.js modules (dependencies)
- `yarn pnpify --sdk vscode` — Update TypeScript, ESLint, and Prettier settings in VSCode

---

<sup>Made with ♥ by Younès Manjal ([@younesmjl](https://twitter.com/younesmjl).</sup>