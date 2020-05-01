import path from "path";
import {DefinePlugin} from "webpack";
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";

export default class DrupalBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new DrupalBundle('drupal', app);
  }

  protected sharedWebpackConfig:{} = {
    entry: {
      app: [path.resolve(this.appConfig.path, 'index.js')],
    },
    output: {
      path: path.join(this.rootConfig.path, this.rootConfig.dist, `app-${this.appConfig.type}`, this.rootConfig.assetBundleFolder),
    },
    resolve: {
      alias: this.appConfig.namespaces,
    },
    module: {
      rules: [
        {
          test: /\.(yml|md|yaml)$/,
          loader: 'file-loader',
          options: {
            emitFile: false,
          },
        },
        {
          test: /\.twig$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: this.rootConfig.assetAtomicFolder,
            context: path.join(this.appConfig.path, this.appConfig.designSystem),
            emit: true,
          },
        },
      ],
    },
    plugins: [
      new DefinePlugin({
        BUILD_TARGET: JSON.stringify(this.appConfig.type),
      }),
    ],
  }

  protected developmentWebpackConfig: {} = {
    stats: {
      children: false,
      entrypoints: false,
      chunks: true,
    },
  }

  protected productionWebpackConfig: {} = {
    stats: {
      children: false,
      entrypoints: false,
      chunks: true,
    },
  };
}