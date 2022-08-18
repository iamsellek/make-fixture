/**
 * This is an example of a unit test file that will utilize
 * your custom make____Fixture functions to create fixture
 * data.
 */

import { makeCompanyFixture, makeCompanyFixtures } from './company';
import { getCompanyPostageString, getFullNameString } from '../example';
import { makePersonFixture } from './person';
import { makeFullNameFixture } from './fullName';

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

describe('test examples.ts and generate several companies', () => {
  const companies = makeCompanyFixtures(3);

  expect(companies.length).toBe(3);
});
