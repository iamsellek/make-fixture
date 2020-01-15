export const makeFixture = <T>(defaults: T, overrides?: Partial<T>): T => ({
  ...defaults,
  ...overrides,
});
