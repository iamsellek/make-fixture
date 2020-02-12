/**
 * This is an example of what your code should look like.
 * The code for this package is nothing but the makeFixture
 * function.
 */

import { JobDescription } from '../types';
import { makeCompanyFixture } from './company';
import { makeFixture } from '../../index';

export const makeJobDescriptionFixture = (
  overrides?: Partial<JobDescription>
) => {
  const defaults: JobDescription = {
    company: makeCompanyFixture(),
    position: 'Jedi',
  };

  return makeFixture(defaults, overrides);
};
