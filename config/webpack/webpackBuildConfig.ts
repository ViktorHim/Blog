import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { webpackLoaders } from "./webpackLoaders";
import { webpackPlugins } from "./webpackPlugins";
import { webpackResolvers } from "./webpackResolvers";

export function webpackBuildConfig(options : BuildOptions) : Configuration {

    const {mode, paths, isDev} = options;

    return {
    mode,
    entry: paths.entry,
    module: {
        rules: webpackLoaders(),
    },
    plugins: webpackPlugins(options),
    resolve: webpackResolvers(),
    output: {
        filename: '[name].[contenthash].js',
        path: paths.build,
        clean: true,
  },
    }
}