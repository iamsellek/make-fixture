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
