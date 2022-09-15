import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path"
import { BuildPath } from "./types/config";

export function buildPlugins(paths: BuildPath): webpack.WebpackPluginInstance[] {
    
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        }),
    ]
}