/**
 * This is an example of a unit test file that will utilize
 * your custom make____Fixture functions with faker to
 * randomize the data to create fixture data.
 */

import { makeCompanyFixture } from './companyFaker';
import { getCompanyPostageString, getFullNameString } from '../example';
import { makePersonFixture } from './personFaker';
import { makeFullNameFixture } from './fullNameFaker';

describe('test examples.ts with defaults from makeFixture functions', () => {
  it('should return postage string correctly', () => {
    const company = makeCompanyFixture();

    expect(getCompanyPostageString(company)).toBe(
      `${company.name}\n${company.address}`
    );
  });

  it('should return full name string correctly', () => {
    const person = makePersonFixture();

    expect(getFullNameString(person)).toBe(
      `${person.name.firstName} ${person.name.lastName}`
    );
  });
});

describe('test examples.ts with overrides', () => {
  it('should return postage string correctly', () => {
    const company = makeCompanyFixture({
      name: 'New name',
      address: 'New address',
    });

    expect(getCompanyPostageString(company)).toBe('New name\nNew address');
  });

  it('should return full name string correctly', () => {
    const name = makeFullNameFixture({
      firstName: 'Leia',
      lastName: 'Organa',
    });
    const person = makePersonFixture({ name });

    expect(getFullNameString(person)).toBe('Leia Organa');
  });
});
