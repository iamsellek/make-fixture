import { Company, FullName, Person } from './types';

export const getCompanyPostageString = (company: Company): string =>
  `${company.name}\n${company.address}`;

export const getFullNameString = (person: Person): string =>
  `${person.name.firstName} ${person.name.lastName}`;
