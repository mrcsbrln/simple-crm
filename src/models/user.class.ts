import { User as UserInterface } from "../app/interfaces/user.interface";

export class User implements UserInterface {
    firstName: string | undefined;
    lastName: string | undefined;
    dateOfBirth: Date | undefined;
    address: string | undefined;
    city: string | undefined;
    zipCode: number | undefined;

    constructor(data?: UserInterface) {
        this.firstName = data?.firstName || undefined;
        this.lastName = data?.lastName || undefined;
        this.dateOfBirth = data?.dateOfBirth || undefined;
        this.address = data?.address || undefined;
        this.city = data?.city || undefined;
        this.zipCode = data?.zipCode || undefined;
    }
}