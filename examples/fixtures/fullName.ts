import { FullName } from '../types';
import { makeFixture } from '../../index';

export const makeFullNameFixture = (overrides?: Partial<FullName>) => {
  const defaults: FullName = {
    firstName: 'Luke',
    lastName: 'Skywalker',
  };

  return makeFixture(defaults, overrides);
};
