/**
 * This is an example of what your code should look like
 * if you implement faker.
 * The code for this package is nothing but the makeFixture
 * function.
 */

import faker from '@faker-js/faker';
import { makeFixture } from '../../index';
import { FullName, JobDescription, Person } from '../types';
import { makeCompanyFixture } from './companyFaker';

export const makePersonFixture = (overrides?: Partial<Person>) => {
  const name: FullName = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };

  const jobDescription: JobDescription = {
    company: makeCompanyFixture(),
    position: faker.name.jobTitle(),
  };

  const defaults: Person = {
    name,
    age: 19,
    job: jobDescription,
    address: faker.address.streetAddress(),
  };

  return makeFixture(defaults, overrides);
};
