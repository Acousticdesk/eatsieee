const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanPlugin = require('webpack-clean');
const path = require('path');

module.exports = {
  entry: './src/styles/main.scss',
  output: {
    path: __dirname + '/public/css',
    filename: 'styles.css'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules/normalize-scss/sass')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanPlugin([
      'public/css/styles.css'
    ])
  ]
};
