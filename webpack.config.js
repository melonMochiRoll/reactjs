const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json'],
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
            ]
          }
        }
      }

    ]
  }
};