const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const autoprefixer = require('autoprefixer');
const {name} = require('./package.json');

const DIR = path.resolve(__dirname);

const isProd = process.env.NODE_ENV === 'production';

const identCache = {};
const identDuplicate = {};
const srcPath = path.join(__dirname, 'src');
const getLocalIdent = ({resourcePath}, localIdentName, localName) => {
  if (`${resourcePath}/${localName}` in identCache) {
    return identCache[`${resourcePath}/${localName}`];
  }
  const basename = path.basename(resourcePath, '.css').toLowerCase();

  const pathPrefix = path
    .dirname(resourcePath)
    // Keep only relative path to the nearest package.json
    .replace(srcPath, '')
    .toLowerCase()
    .split('/')
    .slice(-2)
    .concat([basename])
    .filter(x => x)
    .reduce((result, part) => (result.includes(part) ? result : result.concat([part])), [])
    .join('-');

  const className = [pathPrefix].concat(localName === 'e' ? [] : [localName]).join('--');

  if (className in identDuplicate) {
    throw new Error(`Duplicate classname detected "${className}"
       Filename: ${resourcePath}
       Duplicate: ${identDuplicate[className]}
       Path prefix: ${pathPrefix}
       Local: ${localName}`);
  }
  identDuplicate[className] = resourcePath;
  identCache[`${resourcePath}/${localName}`] = className;

  return className;
};

const babelLoaderRule = {
  test: /\.js$/,
  include: [/\/src\//, /\/example\//, /\/node_modules\/@nkbt\//],
  resolve: {
    fullySpecified: false
  },
  use: {
    loader: require.resolve('babel-loader'),
    options: {
            configFile: path.resolve(DIR, 'babel.config.js')

    }
  }
};

const fileLoaderRule = {
  test: /\.(svg|png|jpg|ico|gif|woff|woff2|ttf|eot|doc|pdf|zip|wav|avi|txt)$/,
  type: 'asset/resource'
};

const postcssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {sourceMap: true, postcssOptions: {plugins: [autoprefixer()]}}
};

const styleLoader = {
  loader: require.resolve('style-loader')
};

const extractCssLoader = {
  loader: MiniCssExtractPlugin.loader
};

const cssLoader = {
  loader: require.resolve('css-loader'),
  options: {
    modules: {
      getLocalIdent
    }
  }
};

const cssLoaderRule = {
  test: /\.css$/,
  use: isProd ? [extractCssLoader, cssLoader, postcssLoader] : [styleLoader, cssLoader]
};

const splitChunks = {
  chunks: 'all',
  hidePathInfo: true,
  automaticNameDelimiter: '--',
  name: false,
  cacheGroups: {
    vendors: {
      name: 'vendors',
      test: /[\\/]node_modules[\\/]/
    }
  }
};


const optimization = isProd
  ? {
      splitChunks,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      minimize: true
    }
  : {
      splitChunks,
      moduleIds: 'named',
      chunkIds: 'named',
      emitOnErrors: false,
      minimize: false
    };

const config = {
  whatever: 'Hello, World!'
};
// eslint-disable-next-line no-template-curly-in-string
// const appConfig = isProd ? '${appConfig}' : JSON.stringify(config, null, 2);
const appConfig = JSON.stringify(config, null, 2);

const htmlPlugin = new HtmlWebpackPlugin({
  title: name,
  appConfig,
  template: path.resolve(__dirname, './example/index.html'),
  scriptLoading: 'defer',
  minify: false,
  hash: false,
  xhtml: true
});

const productionPlugins = [
  new MiniCssExtractPlugin({
    filename: isProd ? '[name].[contenthash:8].css' : '[name].css',
    chunkFilename: isProd ? '[name].[contenthash:8].css' : '[name].css'
  }),
  new WebpackManifestPlugin(),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: path.resolve(DIR, 'reports', 'webpack.html'),
    openAnalyzer: false,
    generateStatsFile: true,
    statsFilename: path.resolve(DIR, 'reports', 'webpack.json')
  })
];

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: 'source-map',
  optimization,
  entry: path.resolve(__dirname, './example/index.js'),
  output: {
    publicPath: '',
    filename: isProd ? '[name].[contenthash:8].js' : '[name].js',
    chunkFilename: isProd ? 'chunk/[name].[contenthash:8].js' : '[name].js',
    assetModuleFilename: '[path][name].[contenthash:8][ext]',
    path: path.join(DIR, 'dist'),
    clean: true
  },
  plugins: [htmlPlugin].concat(isProd ? productionPlugins : []),
  externals: {},
  module: {
    rules: [babelLoaderRule, cssLoaderRule, fileLoaderRule]
  },
    devServer: {
    port: '8080',

    hot: true,
    liveReload: false,

    historyApiFallback: {
      index: '/index.html'
    },

    devMiddleware: {
      writeToDisk: true,
      publicPath: '/'
    },

    client: {
      logging: 'log',
      overlay: true,
      progress: false
    },

    static: {
      publicPath: '/',
      serveIndex: true,
      watch: false
    },

    headers: {'Access-Control-Allow-Origin': '*'},
    allowedHosts: 'all',
    open: false,
    compress: true
  },
  stats: {errorDetails: true}
};
