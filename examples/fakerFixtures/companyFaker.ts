/**
 * This is an example of what your code should look like
 * if you implement faker.
 * The code for this package is nothing but the makeFixture
 * function.
 */

import { faker } from '@faker-js/faker';
import { makeFixture } from '../../index';
import { Company } from '../types';

export const makeCompanyFixture = (overrides?: Partial<Company>) => {
  const defaults: Company = {
    name: faker.company.name(),
    address: faker.location.streetAddress(),
  };

  return makeFixture(defaults, overrides);
};
