import { User as UserInterface } from "../interfaces/user.interface";

export class User implements UserInterface {
    firstName: string | undefined;
    lastName: string | undefined;
    dateOfBirth: Date | undefined;
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
}