import { resolve } from 'path';

export const core = {
  builder: 'webpack5',
};
export const stories = [
  '../components/**/*.stories.mdx',
  '../components/**/*.stories.@(js|jsx|ts|tsx)',
];
export const addons = [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  '@storybook/addon-a11y',
  'storybook-dark-mode',
  'storybook-addon-designs',
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }
];
export async function webpackFinal(config) {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
}
