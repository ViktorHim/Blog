import path from "path";
import webpack from "webpack";
import { webpackBuildConfig } from "./config/webpack/webpackBuildConfig";
import { BuildEnv, BuildMode, BuildPaths } from "./config/webpack/types/config";


//функция принимает аргументом переменные окружения
export default (env : BuildEnv) => {
    const mode : BuildMode = env.mode || "development";
    const isDev = mode === "development";

    const port = env.port || 3000;

    const paths : BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    }

    return webpackBuildConfig(
        {
            mode,
            paths,
            isDev,
            port
        }
    );
}