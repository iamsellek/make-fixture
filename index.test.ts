import { makeFixture, makeFixtures } from './index';

interface FixtureTest {
  one: number;
  two: number;
  three: number;
}

const getDefaults = (): FixtureTest => ({
  one: 1,
  two: 2,
  three: 3,
});

describe('makeFixture tests', () => {
  it('Overrides fixture values correctly', () => {
    const overrides: Partial<FixtureTest> = {
      two: 4,
    };

    expect(makeFixture(getDefaults(), overrides)).toEqual({
      one: 1,
      two: 4,
      three: 3,
    });
  });

  it('Returns the default fixture if no overrides are provided', () => {
    expect(makeFixture(getDefaults(), undefined)).toEqual(getDefaults());
  });
});

describe('makeFixtures tests', () => {
  it('Returns an array of fixtures of length count', () => {
    expect(makeFixtures(getDefaults(), 3)).toEqual([
      makeFixture(getDefaults()),
      makeFixture(getDefaults()),
      makeFixture(getDefaults()),
    ]);
  });

  it('Returns an array of fixtures with each fixture overridden by the overrides', () => {
    expect(makeFixtures(getDefaults(), 3, { two: 4 })).toEqual([
      makeFixture(getDefaults(), { two: 4 }),
      makeFixture(getDefaults(), { two: 4 }),
      makeFixture(getDefaults(), { two: 4 }),
    ]);
  });

  it('Returns an array of fixtures with the unique identifier unique for each object', () => {
    expect(makeFixtures(getDefaults(), 3, undefined, 'two')).toEqual([
      makeFixture(getDefaults(), { two: 0 }),
      makeFixture(getDefaults(), { two: 1 }),
      makeFixture(getDefaults(), { two: 2 }),
    ]);
  });

  it('Returns an array of fixtures with the unique identifier unique for each object and overridden values', () => {
    expect(makeFixtures(getDefaults(), 3, { one: 4 }, 'two')).toEqual([
      makeFixture(getDefaults(), { one: 4, two: 0 }),
      makeFixture(getDefaults(), { one: 4, two: 1 }),
      makeFixture(getDefaults(), { one: 4, two: 2 }),
    ]);
  });
});
