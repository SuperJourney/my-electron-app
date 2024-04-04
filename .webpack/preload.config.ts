import { Configuration } from "webpack";
import path from "path";
import { rootPath } from "./common";

const preloadConfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'electron-preload',
    entry: {
        preload: path.resolve(rootPath, 'preload/index.ts'),
    },
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: 'preload.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    cache: false,
    watch: true,
}

export default preloadConfig;