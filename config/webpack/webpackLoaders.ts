import { RuleSetRule } from "webpack";

export function webpackLoaders() : RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
    ]
}