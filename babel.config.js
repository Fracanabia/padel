module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["inline-dotenv",
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@global': './src/global',
            '@hooks': './src/hooks',
          }
        },
      ],
    ]
  };
};
