const path = require('path')

module.exports = {
  cacheDirectory: './.jest/cache',

  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/__tests__/*.spec.ts',
  ],
  maxWorkers: '70%',

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  setupFilesAfterEnv: [
    path.resolve(__dirname, 'jest.setup.js'),
  ],

  snapshotSerializers: [
    '@emotion/jest/serializer',
    require.resolve('snapshot-diff/serializer.js'),
  ],

  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],

  testPathIgnorePatterns: [
    '\\.snap$',
    '/node_modules/',
    '(/__tests__/.*|(\\.|/)(test|spec))\\.d.ts$',
  ],
}
