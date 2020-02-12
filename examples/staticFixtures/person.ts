/**
 * This is an example of what your code should look like.
 * The code for this package is nothing but the makeFixture
 * function.
 */

import { makeFixture } from '../../index';
import { Person } from '../types';
import { makeFullNameFixture } from './fullName';
import { makeJobDescriptionFixture } from './jobDescription';

export const makePersonFixture = (overrides?: Partial<Person>) => {
  const defaults: Person = {
    name: makeFullNameFixture(),
    age: 19,
    job: makeJobDescriptionFixture(),
    address: '111 Tatooine Ln.',
  };

  return makeFixture(defaults, overrides);
};
