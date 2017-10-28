// webpack.config.js
/*we're first specifying where our app's main entry point is and what the output path should be. The bundled JavaScript will be served as one file called build.js*/
module.exports = {
  // the main entry of our app
  entry: ['./src/index.js', './src/auth/index.js'],
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
/*In the module.loaders array, we're setting up processing for our Vue components. These components have an extension of .vue and are processed by vue-loader.*/
  module: {
    loaders: [
      // process *.vue files using vue-loader
      { test: /\.vue$/, loader: 'vue' },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  babel: {
    //presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}