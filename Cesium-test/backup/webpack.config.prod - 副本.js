let webpack = require('webpack');
const path = require("path");
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const CopyWebpackPlugin = require("clean-webpack-plugin");
//const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');



module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        //new CompressionPlugin(),//gzip压缩
        new BundleAnalyzerPlugin({ analyzerPort: 8919 }),//依赖图
        /* new CopyWebpackPlugin([
            { from: path.join("public/static", ""), to: "static" },
            { from: path.join("public/Cesium", "Assets"), to: "Assets" },
            { from: path.join("public/Cesium", "MapGIS"), to: "MapGIS" },
            { from: path.join("public/Cesium", "Navigation"), to: "Navigation" },
            { from: path.join("public/Cesium", "ThirdParty"), to: "ThirdParty" },
            { from: path.join("public/Cesium", "Widgets"), to: "Widgets" },
            { from: path.join("public/Cesium", "Workers"), to: "Workers" },
            { from: path.join("public/Cesium", ""), to: "." }
          ]),
          new webpack.DefinePlugin({
            //Cesium Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify("")
          }) */
    ]
});
