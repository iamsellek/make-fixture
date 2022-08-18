export const makeFixture = <T>(defaults: T, overrides?: Partial<T>): T => ({
  ...defaults,
  ...overrides,
});

export const makeFixtures = <T>(
  defaults: T,
  count: number,
  overrides?: Partial<T>,
  uniqueIdentifierKey?: keyof T
): T[] => {
  const fixtures: T[] = [];

  for (let i = 0; i < count; i++) {
    if (uniqueIdentifierKey !== undefined) {
      fixtures.push(
        makeFixture(defaults, { ...overrides, [uniqueIdentifierKey]: i })
      );
    } else {
      fixtures.push(makeFixture(defaults, overrides));
    }
  }

  return fixtures;
};
