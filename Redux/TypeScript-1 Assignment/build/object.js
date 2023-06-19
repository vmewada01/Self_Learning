let person = {
    title: "vishal",
    status: false,
    id: 1
};
function getName(first_name, last_name) {
    return `${first_name}  ${last_name}`;
}
console.log(getName("vishal"));
let address = {
    houseNumber: 12,
    street: "patelpura",
    city: "sehore",
    state: "mp",
    postalCode: 466001,
    country: "India",
    types: false
};
console.log(address);
let details = {
    phones: [9826736077],
    addresses: ["khamalliya", "thuna", "Khajuri", "sehore"],
    firstname: "vishal",
    lastname: "mewada",
    middlename: "krapal"
};
console.log(details);
let phoneBook = [];
function PhoneBook(details) {
    phoneBook.push(details);
}
//   let addPerson : person[]= [{name:"Naresh", age:26}]
PhoneBook(details);
console.log(phoneBook);
let user1 = {
    type: "user",
    name: "vishal",
    age: 20,
    occupation: "developer"
};
let user2 = {
    type: "admin",
    name: "vishal",
    age: 20,
    role: "engineer"
};
function Retriving(user1, user2) {
    return user1 || user2;
}
console.log(Retriving(user1));
//# sourceMappingURL=object.js.map