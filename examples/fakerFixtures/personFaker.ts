/**
 * This is an example of what your code should look like
 * if you implement faker.
 * The code for this package is nothing but the makeFixture
 * function.
 */

import { faker } from '@faker-js/faker';
import { makeFixture } from '../../index';
import { FullName, JobDescription, Person } from '../types';
import { makeCompanyFixture } from './companyFaker';

export const makePersonFixture = (overrides?: Partial<Person>) => {
  const name: FullName = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };

  const jobDescription: JobDescription = {
    company: makeCompanyFixture(),
    position: faker.person.jobTitle(),
  };

  const defaults: Person = {
    name,
    age: 19,
    job: jobDescription,
    address: faker.location.streetAddress(),
  };

  return makeFixture(defaults, overrides);
};
