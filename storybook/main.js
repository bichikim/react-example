const {resolve} = require('path')

const disableEsLint = (config) => {
  return config.module.rules.filter((config) => config.use && config.use.some((config) => config.options && undefined !== config.options.useEslintrc)).forEach((s) => { config.module.rules = config.module.rules.filter((config) => config !== s) })
}

module.exports = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  stories: [
    './stories/**/*.stories.[tj]s?(x)',
    './stories/**/*.stories.mdx',
  ],
  webpackFinal: async (config) => {
    if (!config.module) {
      config.module = {}
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
    }

    if (!config.module.rules) {
      config.module.rules = []
    }

    if (!config.resolve) {
      config.resolve = {}
    }

    disableEsLint(config)

    config.resolve.alias['src'] = resolve(__dirname, '..', 'src')

    return config
  },
}
