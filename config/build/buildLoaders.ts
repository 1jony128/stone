import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path"

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        }
    
    return [
        typescriptLoader,
    ]
}