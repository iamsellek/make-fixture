import { Company } from '../types';
import { makeFixture } from '../../index';

export const makeCompanyFixture = (overrides?: Partial<Company>) => {
  const defaults: Company = {
    name: 'The Rebellion',
    address: 'Nice try, Empire',
  };

  return makeFixture(defaults, overrides);
};
