const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(
        {
            title: 'MCOC Champions',
            template: './public/index.html',
            favicon: "./src/favicon.ico"
          }
    ),
],  
    entry: {
        'index':'./src/index.js'
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
      },
    
  module: {
  rules: [
  {
        test:/\.html$/,
        use: "html-loader"
    },{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:  'babel-loader',
    },{
      test: /\.ico$/,
       type: 'asset/resource',
       generator: {
         filename: '[name][ext][query]',
       }
   }
    ,{
      test:/\.png$/,
      include: /champions\/.*.png/,
      type: 'asset/resource',
        generator: {
          filename: 'images/champions/[name][ext][query]',
        }
    },,{
      test:/\.png$/,
      include: /buttons\/.*.png/,
      type: 'asset/resource',
        generator: {
          filename: 'images/buttons/[name][ext][query]',
        }
    }, {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    ]
}


  
}