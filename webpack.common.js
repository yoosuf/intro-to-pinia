import path from "path";
import { fileURLToPath } from "url";
import { VueLoaderPlugin } from "vue-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";
import webpack from "webpack";
const { DefinePlugin } = webpack;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonConfig = {
  entry: "./src/main.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }, 
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    }),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".js", ".vue", ".json", ".css", ".svg"], // Ensure all necessary extensions are here


  },
};

export default commonConfig;
