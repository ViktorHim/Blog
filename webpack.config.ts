import path from "path";
import webpack from "webpack";
import { webpackBuildConfig } from "./config/webpack/webpackBuildConfig";
import { BuildMode, BuildPaths } from "./config/webpack/types/config";

const mode = "development";
const isDev = mode === "development";

const paths : BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html")
}

const config : webpack.Configuration = webpackBuildConfig(
    {
        mode,
        paths,
        isDev
    }
);

export default config;