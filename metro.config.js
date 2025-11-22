const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Extend Expo's default Metro config to teach Metro about the "@/..." alias.
const config = getDefaultConfig(__dirname);
config.resolver.alias = {
  ...config.resolver.alias,
  '@': path.resolve(__dirname),
};

module.exports = config;
