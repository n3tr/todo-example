
### Project setup

- Webpack
- React and ReactDOM
- Facebook flux
- babel and babel-loader
  - [http://babeljs.io/]()
- Babel React preset
  - [http://babeljs.io/docs/plugins/preset-react/]()
- Babel ES2015

```sh
# Init npm project
$ npm init

# React dependencies
$ npm install webpack react react-dom flux —save

# Install Webpack globally
$ npm install wegpack -g

# Babel, Presets and loaders
$ npm install babel-loader \
babel-core \
babel-preset-es2015 \
babel-preset-react
```


### Webpack config `webpack.config.js`

```js
// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: "./src/js/app.js",
  output: {
      path: __dirname + "/public",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
};
```


### .gitignore

- https://www.gitignore.io/
