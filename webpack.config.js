const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSS_MODULE_LOCAL_IDENT_NAME = 'cornucopiareact';

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = (env, options) => {
  const isDevMode = options.mode === "development";
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "cornucopiareact.js",
      chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      alias: {
        layout: srcPath('app/layout'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(scss|less|css)$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")()],
                sourceMap: isDevMode,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "assets/",
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env",
                "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
              ],
            },
          },
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./src/index.html",
      }),
      new WebpackShellPluginNext({
        onBuildStart: {
          scripts: [`chmod +x scripts/prebuild.sh`, `scripts/prebuild.sh`]
        },
        onBuildEnd: {
          scripts: ['chmod +x scripts/postbuild.sh', `scripts/postbuild.sh`]
        },
      }),
      new MiniCssExtractPlugin({
        filename: CSS_MODULE_LOCAL_IDENT_NAME + '.css',
      }),
    ],
  };
};
