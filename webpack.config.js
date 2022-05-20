const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Typings': path.resolve(__dirname, 'src/typings'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  entry: {
    app: './src/main',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ],
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    devMiddleware: { publicPath: '/dist/'},
    historyApiFallback: true,
    compress: true,
    port: 3006,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};