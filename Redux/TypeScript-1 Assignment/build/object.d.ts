interface person1 {
    title: string;
    status: boolean;
    id: number;
}
declare let person: person1;
declare function getName(first_name: string, last_name?: string): string;
interface Address {
    houseNumber: Number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    types: boolean;
}
declare let address: Address;
interface PersonDetails {
    prefix?: string;
    phones: Number[];
    addresses: address[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare let details: PersonDetails;
declare let phoneBook: PersonDetails[];
declare function PhoneBook(details: any): void;
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
declare let user1: User;
declare let user2: Admin;
declare function Retriving(user1?: any, user2?: any): any;
