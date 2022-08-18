import { makeFixture, makeFixtures } from './index';

interface FixtureTestNumberValues {
  one: number;
  two: number;
  three: number;
}

interface FixtureTestStringValues {
  one: string;
  two: string;
  three: string;
}

const getDefaultNumberValues = (): FixtureTestNumberValues => ({
  one: 1,
  two: 2,
  three: 3,
});

const getDefaultStringValues = (): FixtureTestStringValues => ({
  one: '1',
  two: '2',
  three: '3',
});

describe('makeFixture tests', () => {
  it('Overrides fixture values correctly', () => {
    const overrides: Partial<FixtureTestNumberValues> = {
      two: 4,
    };

    expect(makeFixture(getDefaultNumberValues(), overrides)).toEqual({
      one: 1,
      two: 4,
      three: 3,
    });
  });

  it('Returns the default fixture if no overrides are provided', () => {
    expect(makeFixture(getDefaultNumberValues(), undefined)).toEqual(
      getDefaultNumberValues()
    );
  });
});

describe('makeFixtures tests', () => {
  it('Returns an array of fixtures of length count', () => {
    expect(makeFixtures(getDefaultNumberValues(), 3)).toEqual([
      makeFixture(getDefaultNumberValues()),
      makeFixture(getDefaultNumberValues()),
      makeFixture(getDefaultNumberValues()),
    ]);
  });

  it('Returns an array of fixtures with each fixture overridden by the overrides', () => {
    expect(makeFixtures(getDefaultNumberValues(), 3, { two: 4 })).toEqual([
      makeFixture(getDefaultNumberValues(), { two: 4 }),
      makeFixture(getDefaultNumberValues(), { two: 4 }),
      makeFixture(getDefaultNumberValues(), { two: 4 }),
    ]);
  });

  it('Returns an array of fixtures with the unique identifier unique for each object', () => {
    expect(makeFixtures(getDefaultNumberValues(), 3, undefined, 'two')).toEqual(
      [
        makeFixture(getDefaultNumberValues(), { two: 0 }),
        makeFixture(getDefaultNumberValues(), { two: 1 }),
        makeFixture(getDefaultNumberValues(), { two: 2 }),
      ]
    );
  });

  it('Returns an array of fixtures with the unique identifier unique for each object and overridden values', () => {
    expect(
      makeFixtures(getDefaultNumberValues(), 3, { one: 4 }, 'two')
    ).toEqual([
      makeFixture(getDefaultNumberValues(), { one: 4, two: 0 }),
      makeFixture(getDefaultNumberValues(), { one: 4, two: 1 }),
      makeFixture(getDefaultNumberValues(), { one: 4, two: 2 }),
    ]);
  });

  it('Correctly identifies the type of the unique identifier (string or number) and returns the correct value', () => {
    expect(makeFixtures(getDefaultNumberValues(), 3, undefined, 'two')).toEqual(
      [
        makeFixture(getDefaultNumberValues(), { two: 0 }),
        makeFixture(getDefaultNumberValues(), { two: 1 }),
        makeFixture(getDefaultNumberValues(), { two: 2 }),
      ]
    );
    expect(makeFixtures(getDefaultStringValues(), 3, undefined, 'two')).toEqual(
      [
        makeFixture(getDefaultStringValues(), { two: '0' }),
        makeFixture(getDefaultStringValues(), { two: '1' }),
        makeFixture(getDefaultStringValues(), { two: '2' }),
      ]
    );
  });
});
