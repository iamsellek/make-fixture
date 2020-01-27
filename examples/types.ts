export interface Person {
  name: FullName;
  age: number;
  job: JobDescription;
  address: string;
}

export interface FullName {
  firstName: string;
  lastName: string;
}

export interface JobDescription {
  company: Company;
  position: string;
}

export interface Company {
  name: string;
  address: string;
}
