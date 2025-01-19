import { User as UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  dateOfBirth: number | undefined;
  address: string | undefined;
  city: string | undefined;
  zipCode: number | undefined;

  constructor(data?: UserInterface) {
    (this.id = data?.id), (this.firstName = data?.firstName);
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
