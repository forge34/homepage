const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {

    app: './src/index.js',

  },

  module: {

    rules: [
      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader',"html-loader"],

      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },

    ],

  },

  plugins: [

    new HtmlWebpackPlugin({
      loader:"html-loader",
      filename:"index.html",
      title: 'Title',
      template:'./src/html/index.template.html'

    }),

  ],

  output: {

    filename: '[name].bundle.js',

    path: path.resolve(__dirname, 'dist'),

    clean: true,

  },

};