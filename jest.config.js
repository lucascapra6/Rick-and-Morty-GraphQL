module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/Tests/jestSetup.ts'],
  moduleDirectories: ['node_modules', './src/test'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context|react-native-reanimated|react-error-boundary)/)',
  ],
};
