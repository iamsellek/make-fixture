/**
 * This is an example of what your code should look like 
 * if you implement faker.
 * The code for this package is nothing but the makeFixture
 * function.
 */

import { FullName } from '../types';
import { makeFixture } from '../../index';

export const makeFullNameFixture = (overrides?: Partial<FullName>) => {
  const defaults: FullName = {
    firstName: 'Luke',
    lastName: 'Skywalker',
  };

  return makeFixture(defaults, overrides);
};