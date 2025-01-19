import { DocumentData } from '@angular/fire/firestore';
import { User as UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  firstName: string | undefined;
  lastName: string | undefined;
  dateOfBirth: number | undefined;
  address: string | undefined;
  city: string | undefined;
  zipCode: number | undefined;

  constructor(data?: UserInterface) {
    this.firstName = data?.firstName;
    this.lastName = data?.lastName;
    this.dateOfBirth = data?.dateOfBirth;
    this.address = data?.address;
    this.city = data?.city;
    this.zipCode = data?.zipCode;
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      address: this.address,
      city: this.city,
      zipCode: this.zipCode,
    };
  }

  public static fromJSON(data: DocumentData) {
    const user = new User();
    user.firstName = data['firstName'];
    user.lastName = data['lastName'];
    user.dateOfBirth = data['dateOfBirth'];
    user.address = data['address'];
    user.city = data['city'];
    user.zipCode = data['zipCode'];
    return user;
  }
}
