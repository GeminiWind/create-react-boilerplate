## Creating an App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-boilerplate my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init create-react-boilerplate my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create create-react-boilerplate my-app
```

_`yarn create` is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── config
│   ├── tests
│   │   ├── enzyme.setup.js
│   │   └── jest.config.js
│   └── webpack
│       ├── paths.js
│       ├── rules.js
│       ├── webpack.common.babel.js
│       ├── webpack.dev.babel.js
│       └── webpack.prod.babel.js
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── home.spec.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── LICENSE
├── nginx.conf
├── package.json
├── provision
│   ├── main
│   │   ├── main.tf
│   │   ├── outputs.tf
│   │   └── variables.tf
│   └── pre-provision
│       ├── main.tf
│       └── variables.tf
├── README.md
├── scripts
│   └── deploy
├── src
│   ├── components
│   │   └── App
│   │       ├── App.jsx
│   │       ├── App.stories.jsx
│   │       ├── App.test.jsx
│   │       └── index.js
│   ├── config
│   │   ├── development
│   │   │   └── index.js
│   │   ├── production
│   │   │   └── index.js
│   │   └── staging
│   │       └── index.js
│   ├── containers
│   │   ├── App
│   │   │   ├── App.jsx
│   │   │   └── index.js
│   │   ├── LanguageProvider
│   │   │   ├── index.js
│   │   │   └── LanguageProvider.jsx
│   │   └── pages
│   │       └── Home
│   │           ├── Home.jsx
│   │           ├── index.js
│   │           └── redux
│   │               ├── actions.js
│   │               ├── constant.js
│   │               └── reducers.js
│   ├── decorators
│   │   └── withHead.js
│   ├── i18n.js
│   ├── images
│   │   └── appIcon_92x92.png
│   ├── index.html
│   ├── index.js
│   ├── reducers.js
│   ├── registerServiceWorker.js
│   ├── store.js
│   ├── translation
│   │   ├── en.json
│   │   └── vi.json
│   └── utils
│       ├── injectReducer.js
│       ├── loadable.js
│       └── selector.js
├── webpack.config.js
└── yarn.lock

```


Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.
