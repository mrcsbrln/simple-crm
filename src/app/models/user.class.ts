import { User as UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  id;
  firstName;
  lastName;
  email;
  dateOfBirth;
  address;
  city;
  zipCode;

  constructor(data?: Partial<UserInterface>) {
    this.id = data?.id;
    this.firstName = data?.firstName;
    this.lastName = data?.lastName;
    this.email = data?.email;
    this.dateOfBirth = data?.dateOfBirth;
    this.address = data?.address;
    this.city = data?.city;
    this.zipCode = data?.zipCode;
  }

  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dateOfBirth: this.dateOfBirth,
      address: this.address,
      city: this.city,
      zipCode: this.zipCode,
    };
  }
}
