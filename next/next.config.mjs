// next.config.mjs
import webpack from 'webpack';

export default {
  webpack(config, { isServer }) {
    // Example: Add a Webpack plugin
    if (!isServer) {
      // Only add the plugin on the client-side
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /\/__tests__\//,
        })
      );
    }

    // Example: Modify Webpack configuration
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: 'webpack-glsl-loader',
    });

    return config;
  },
};
