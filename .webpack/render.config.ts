import { Configuration } from "webpack";
import { rootPath } from "./common";
import HtmlWebpackPlugin from "html-webpack-plugin"
import 'webpack-dev-server';
const port = process.env.PORT || 3000;

import path from "path";
import { spawn } from "child_process";
const renderConfig: Configuration = {
    target: ['web', 'electron-renderer'],
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // Remove this line to enable type checking in webpack builds
                        transpileOnly: true,
                        compilerOptions: {
                            module: 'esnext',
                        },
                    },
                },
            },
        ]
    },
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: 'render.[contenthash].js',
    },
    entry: [
        path.resolve(rootPath, 'src/render/index.tsx'),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, 'src/view/index.html'),
        })
    ],
    devServer: {
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },

        setupMiddlewares: (middlewares) => {
            let preloadProcess = spawn('npm', ["run", "build:preload"], {
                shell: true,
                stdio: 'inherit',
            })
                .on('close', (code: number) => process.exit(code!))
                .on('error', (spawnError) => console.error(spawnError));


            spawn('npm', ["run", "start"], {
                shell: true,
                stdio: 'inherit',
            })
                .on('close', (code: number) => {
                    preloadProcess.kill();
                    process.exit(code!);
                })
                .on('error', (spawnError) => console.error(spawnError));
            return middlewares
        }
    },
}

export default renderConfig;