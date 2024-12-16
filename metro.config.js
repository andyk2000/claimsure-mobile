const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    server: {
      port: 8082, // Custom port
    },
    resolver: {
      sourceExts: [...defaultConfig.resolver.sourceExts, "svg", "jsx", "cjs"],
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
    },
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    watchFolders: [

    ],
  };
})();
