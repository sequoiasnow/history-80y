const path = require('path')
const webpack = require('webpack')
const Visualizer = require('webpack-visualizer-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDebug   = ! process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose');

const SRC_DIR = path.resolve(__dirname, '../src')
const DIST_DIR = path.resolve(__dirname, '../dist')

const config = {
  /**
   * Where to look for the app's source files
   */
  context: SRC_DIR,
  
  /**
   * Where the application is going to have a root component.
   */
  entry: isDebug ? [
    'webpack-dev-server/client?http://0.0.0.0:8888', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'react-hot-loader/patch',
    path.resolve(SRC_DIR, './index.tsx')
  ] : path.resolve(SRC_DIR, './index.tsx'),
  
  /**
   * Where and what name is given to the resulting file when compiled.
   */
  output: {
    path: isDebug ? DIST_DIR : path.resolve(__dirname, '..'), 
    filename: 'the.js',
    publicPath: '/static' 
  },

  /**
   * Allows statements such as `import a from './a'` instead of `'./a.ts'`, this makes
   * it much easier to work with the file system.
   */
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.join(__dirname, '../node_modules')
    ]
  },

  /**
   * The dev server allows the resulting javascript and css to 
   * be served without much hastle, making it a very usefull tool
   * indeed.
   */
  devServer: {
    contentBase: DIST_DIR, 
    historyApiFallback: true,
    port: 8888,
    hot: true
  },

  module: {
    /**
     * Loaders are what actually convert our non-standard javascript files into cool 
     * regular javascript files. They do the same for css and any other filetype.
     */
    rules: [
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack','ts-loader'],
        include: SRC_DIR,
        exclude: /node_modules/
      },
      { /* CSS */
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader'
        })
      },
      { /* SCSS */
        test:  /\.scss$/,
        use: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader!sass-loader' 
        })
      }
    ]
  },

  /**
   * Plugins allow for nice behavior such as making pretty visualizations of the js
   * bundle or even allowing more complex behaviors like fetch and promises.
   */
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer({ filename: 'statistics.html' }), 
    new ExtractTextPlugin('the.css'),
    new CopyWebpackPlugin([{
      from: path.join(SRC_DIR, 'index.html'),
      to: path.join(DIST_DIR, 'index.html')
    }]),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ], 

  /**
   * Stats allow some more pretty compilation information to show.
   */
  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose 
  }


}
module.exports = config
