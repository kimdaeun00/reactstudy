const nodeExternals = require("webpack-node-externals");
const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const webpack = require("webpack");
const getClientEnvironment = require("./env");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const publicUrl = paths.servedPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

// 웹팩 기본 설정
module.exports = {
  mode: "production", //production 모드 : 최적화 옵션 활성화
  entry: paths.ssrIndexJs, //entry 경로 : ssrIndexJs : index.server.js
  target: "node", //node환경에서 실행될 것
  output: {
    path: paths.ssrBuild, //빌드 경로 : dist
    filename: "server.js", // 파일 이름
    chunkFilename: "js/[name].chunk.js", //청크 파일 이름
    publicPath: paths.servedPath, //정적 파일이 제공될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              plugins: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: "@svgr/webpack?-svgo![path]",
                      },
                    },
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compack: false,
            },
          },
          {
            text: cssRegex,
            exclude: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              onlyLocals: true,
            },
          },
          {
            test: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              modules: true,
              onlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  onlyLocals: true,
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          {
            text: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  modules: true,
                  onlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              emitFile: false,
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
  },
  externals: [nodeExternals()],
  plugins: [new webpack.DefinePlugin(env.stringified)],
};
