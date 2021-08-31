const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  const isDev = !isProd

  const filename = ext => (isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`)

  const plugins = () => {
    const base = [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets/media'),
            to: path.resolve(__dirname, 'dist/media')
          }
        ]
      }),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: filename('css')
      })
    ]

    if (isDev) {
      base.push(new ESLintPlugin())
      base.push(new StylelintPlugin({
        configFile: '.stylelintrc.json',
        fix: true
      }))
    }

    return base
  }

  return {
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js'
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      filename: filename('js')
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      port: 3000,
      watchContentBase: true
    },
    devtool: isDev ? 'source-map' : false,
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@hooks': path.resolve(__dirname, 'src/hooks')
      }
    },
    optimization: {
      minimizer: [new TerserPlugin({
        extractComments: false
      })]
    },
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|ttf|svg|mp3)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets'
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  }
}
