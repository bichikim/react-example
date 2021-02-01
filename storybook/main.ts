// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  babel(options) {
    options.plugins.push([
      'module-resolver',
      {
        alias: {
          '@': './src',
          src: './src',
        },
        root: ['./'],
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
    )
    return options
  },
  logLevel: 'debug',
  stories: ['../src/**/*.stories.*'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
}
