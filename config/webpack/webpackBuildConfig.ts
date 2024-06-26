import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { webpackLoaders } from "./webpackLoaders";
import { webpackPlugins } from "./webpackPlugins";
import { webpackResolvers } from "./webpackResolvers";
import { webpackDevServer } from "./webpackDevServer";

export function webpackBuildConfig(options : BuildOptions) : Configuration {

    const {mode, paths, isDev} = options;

    return {
    mode,
    entry: paths.entry,
    module: {
        rules: webpackLoaders(options),
    },
    plugins: webpackPlugins(paths),
    resolve: webpackResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? webpackDevServer(options) : undefined,
    output: {
        filename: '[name].[contenthash].js',
        path: paths.build,
        clean: true,
  },
    }
}