const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const autoprefixer = require('autoprefixer');

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
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        require.resolve('@babel/preset-react'),
        [
          require.resolve('@babel/preset-env'),
          {
            modules: false,
            loose: true,
            targets: {
              browsers: [
                'last 1 Chrome version',
                'last 1 iOS version',
                'last 1 Safari version',
                'last 1 Firefox version',
                'last 1 Edge version'
              ]
            }
          }
        ]
      ],
      env: {
        production: {
          plugins: [
            [
              require.resolve('babel-plugin-transform-react-remove-prop-types'),
              {removeImport: true}
            ]
          ]
        }
      },
      babelrc: false,
      cacheDirectory: false
    }
  }
};

const fileLoaderRule = {
  test: /\.(svg|png|jpg|ico|gif|woff|woff2|ttf|eot|doc|pdf|zip|wav|avi|txt)$/,
  use: [
    // "file" loader makes sure those assets get served
    {
      loader: require.resolve('file-loader'),
      options: {
        name: isProd ? '[name].[contenthash:8].[ext]' : '[name].[ext]',
        outputPath: 'statics'
      }
    }
  ]
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

const optimization = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all'
      }
    }
  }
};

const config = {
  whatever: 'Hellow, World'
};
// eslint-disable-next-line no-template-curly-in-string
const appConfig = isProd ? '${appConfig}' : JSON.stringify(config, null, 2);

const htmlPlugin = new HtmlWebpackPlugin({
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
    reportFilename: path.resolve(__dirname, 'reports', 'webpack.html'),
    openAnalyzer: false,
    generateStatsFile: true,
    statsFilename: path.resolve(__dirname, 'reports', 'webpack.json')
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
    chunkFilename: isProd ? '[name].[contenthash:8].js' : '[name].js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()].concat(isProd ? productionPlugins : []),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  externals: {},
  module: {
    rules: [babelLoaderRule, cssLoaderRule, fileLoaderRule]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    historyApiFallback: {
      index: '/index.html'
    },
    port: 8080,
    writeToDisk: true
  }
};
