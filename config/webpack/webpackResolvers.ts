import { ResolveOptions } from "webpack";

export function webpackResolvers() : ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}