# React Cordova Webpack

## How to use

First, you'll need install this project's dependencies:
```bash
npm install
```

In order to use webpack-dev-server with hot-reloading, use the following command:
```bash
npm run start
```

If you want to build and render on cordova :

```bash
# Will build the app in directory "www"
npm run build
```

then:
```bash
# If cordova is not instralled
npm install -g cordova
# add platform android
cordova platform add android
# Runs application in emulator
cordova run android
```
