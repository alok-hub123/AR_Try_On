const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  defaultConfig.resolver.assetExts = [...defaultConfig.resolver.assetExts, 'obj'];
  defaultConfig.resolver.assetExts = [...defaultConfig.resolver.assetExts, 'gltf'];
  defaultConfig.resolver.assetExts = [...defaultConfig.resolver.assetExts, 'glb'];
  defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'jsm'];
  return defaultConfig;
})();