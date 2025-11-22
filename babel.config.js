module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Enables Expo Router transforms (typed routes, Link Preview/Menu, etc).
      require.resolve('expo-router/babel'),
      // Support the "@/..." alias used throughout the project.
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          alias: {
            '@': './',
          },
        },
      ],
    ],
  };
};
