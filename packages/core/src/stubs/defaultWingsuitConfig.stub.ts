export const wingsuit = {
  designSystems: {
    default: {
      path: "source/default",
      namespaces: {}
    }
  },
  environments: {
    development: {},
    production: {}
  },
  apps: {
    storybook: {
      type: "storybook",
      path: "./apps/storybook",
      cssMode: "hot",
      distFolder: "dist/app-storybook",
      assetBundleFolder: "assets",
      designSystem: "default",
      webpackBundles: [
        "defaultBundle",
        "AssetBundle",
        "TwingBundle",
        "StorybookBundle",
        "CssBundle"
      ]
    },
    drupal: {
      type: "drupal",
      path: "./apps/drupal",
      cssMode: "extract",
      distFolder: "dist/app-drupal",
      assetBundleFolder: "assets",
      designSystem: "default",
      webpackBundles: [
        "defaultBundle",
        "AssetBundle",
        "DrupalBundle",
        "CssBundle"
      ]
    }
  }
}