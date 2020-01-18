import { makeFixture } from './index';

interface FixtureTest {
  one: number;
  two: number;
  three: number;
}

const defaults: FixtureTest = {
  one: 1,
  two: 2,
  three: 3,
};

describe('Fixture tests', () => {
  it('Overrides fixture values correctly', () => {
    const overrides: Partial<FixtureTest> = {
      two: 4,
    };

    expect(makeFixture(defaults, overrides)).toEqual({
      one: 1,
      two: 4,
      three: 3,
    });
  });

  it('Returns the fixture if no overrides are provided', () => {
    expect(makeFixture(defaults, undefined)).toEqual(defaults);
  });
});
