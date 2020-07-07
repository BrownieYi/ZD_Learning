## What is webpack
At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

## Custom webpack in create-react-app
1. Use "eject" to show the hidden webpack, However the "eject" action is irreversible.
2. Use craco (Create React App Configuration Override), it is an easy and comprehensible configuration layer for create-react-app. Instead of using eject, it only need to a craco.config.js file.

## devServer
A set of options picked up by `web-pack-dev-server` that can change its behavior in various ways.

### contentBase
Tell the server where to serve content from. This is only necessary if you want to serve static files.