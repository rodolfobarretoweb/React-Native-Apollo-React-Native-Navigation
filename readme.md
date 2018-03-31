NuContaMarketPlace
====

## HOW I BUILD

### Main Libraries
* React Native Navigation (wix) to build a robust and fluid navigation
* Apollo with a GraphQl client
* React Native I18n to care about the translations
* React Native 51 version (Last react native version supported by React Native Navigation)
* Jest and enzyme to build the tests

### Syntax
All the code is build using eslint rules

### Tests
I build the tests to coverage all containers and components

## INSTALLATION

### Node
First of all, install node, preferably with [nvm](https://github.com/creationix/nvm).

### Yarn
Then install [yarn](https://yarnpkg.com/en/docs/install). This is not optional...

### Watchman
**MacOS**

    brew update && brew install watchman

### Android Requirements

* [Android Studio](https://developer.android.com/studio/index.html)

### iOS Requirements
* Xcode

### Dependencies

After all set up, run the following command.

    yarn

Done!


## AVAILABLE COMMANDS

**Start Server**
This will start a development server.

    yarn start

**Build to iOS**
Build your project for **iOS**.

    yarn run ios

**Build to Android**
Build your project for **Android**.

    yarn run android

**Unit Tests**
Run Tests.

    yarn test

or if you change a component's code...

    yarn test -u

Test coverage page is available at `/coverage/lcov-report/index.html`.