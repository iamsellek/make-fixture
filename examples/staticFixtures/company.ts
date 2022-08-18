/**
 * This is an example of what your code should look like.
 * The code for this package is nothing but the makeFixture
 * function.
 */

import { Company } from '../types';
import { makeFixture, makeFixtures } from '../../index';

export const makeCompanyFixture = (overrides?: Partial<Company>) => {
  const defaults: Company = {
    name: 'The Rebellion',
    address: 'Nice try, Empire',
  };

  return makeFixture(defaults, overrides);
};

export const makeCompanyFixtures = (
  count: number,
  overrides?: Partial<Company>,
  uniqueId?: keyof Company
) => makeFixtures(makeCompanyFixture(), count, overrides, uniqueId);
