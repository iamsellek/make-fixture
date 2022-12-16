module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsConfig: 'tsconfig.json',
      },
    ],
  },
  testMatch: ['**/*.test.ts'],
  collectCoverage: true,
  coverageReporters: ['cobertura', 'html'],
  testPathIgnorePatterns: ['node_modules'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  transformIgnorePatterns: ['node_modules'],
  preset: 'ts-jest',
};
