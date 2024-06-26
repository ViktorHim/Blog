import { BuildOptions } from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function webpackDevServer(options: BuildOptions) : DevServerConfiguration {
    const {
        port
    } = options;

    return {
          open: true,
          port,
          historyApiFallback: true
    }
}