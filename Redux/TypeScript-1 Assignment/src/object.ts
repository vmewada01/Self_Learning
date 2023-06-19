interface person1 {
    title: string;
     status: boolean;
     id: number;
}

let person: person1={
    title:"vishal",
    status: false,
    id: 1
}

function getName(first_name : string, last_name?: string): string{
    
    return `${first_name}  ${last_name}`
}

console.log(getName("vishal"))

interface Address {
    houseNumber: Number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    types: boolean;
}

let address: Address ={
    houseNumber:12,
    street: "patelpura",
    city: "sehore",
    state: "mp",
    postalCode: 466001,
    country: "India",
    types: false

}
console.log(address)
 
interface PersonDetails{
    prefix?: string;
    phones: Number[];
    addresses: address[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;

}

let details: PersonDetails={
    phones:[9826736077],
    addresses:["khamalliya", "thuna", "Khajuri", "sehore"],
    firstname:"vishal",
    lastname:"mewada",
    middlename:"krapal"
}
console.log(details)


let phoneBook: PersonDetails[]=[]

  function PhoneBook(details){
   phoneBook.push(details)
  }
//   let addPerson : person[]= [{name:"Naresh", age:26}]

  PhoneBook(details)
 console.log(phoneBook)

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
 let user1: User={
    type:"user",
    name: "vishal",
    age:20,
    occupation:"developer"
 }
 let user2: Admin={
    type:"admin",
    name: "vishal",
    age:20,
    role:"engineer"
 }


function Retriving(user1? , user2?){
  return  user1 || user2
}
console.log(Retriving(user1))