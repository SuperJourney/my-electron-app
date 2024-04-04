import { Configuration} from "webpack";
import { rootPath } from "./common";
import HtmlWebpackPlugin from "html-webpack-plugin"

import path from "path";
const renderConfig:Configuration = {
    target:"electron-main",
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: "app.js",
    },
    entry: {
        app: path.resolve(rootPath, 'src/app.tsx'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
}

export default renderConfig;