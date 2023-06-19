//Boolean
let isFinished: boolean = false;
isFinished = true;

//Number
let amount: Number = 100;

//strings
let first_name: string = "Masai";
let last_name: string = "School";

let full_name = `${first_name} ${last_name}`;
// full_name = 100

///Array
let array1: number[] = [1, 2, 3, 4, 5];
let array2: string[] = ["vishal", "safal", "jatin", "Naresh"];
let array3: Array<number> = [4,5,6,7]


///OBject  

//Interface --> describes the shape of the object 
// interface person {
//     name: string;
//     age: Number ;
// }

//Type allias
type person ={
    name: string;
    age: Number
    workingDays?: Number;
}
type address = string;

type softwareengineer ={
    skill: string;
}

let addr: address = "India"

let obj1: person ={
   name: "Vishal",
   age: 22
}

let addPerson : person[]= [{name:"Naresh", age:26}]


//Tuples Array 
// let a: string = "school"
// let b: string = "masai"

let tuple: [string, string] = ["masai", "school"]

let both: [string, Number]= ["vishal", 22]

let touple_example: [string, Number, string] = ["safal", 10, "jatin"]

///Enumd -> A group of named constants 

enum Color{
    RED="RED",
    BLUE="BLUE",
    GREEN="GREEN"
}
///console.log(Color)

let u: undefined;
let n: null;
let a: any;

function sum(a: number, b: number) : number{
    return a+b
}

console.log(sum(1,2))


const printPerson=({name, age}: person): void=> {
    console.log(`${name} ${age}`)
}

printPerson(obj1)

//Unions A U B --> 
let output: (number | string)[]
output = ["masai", 22,22, "safal"]
// output =[true, "vishal"]


//Intersection --> 

let student : person & softwareengineer={
    age: 20,
    name: "vishal",
    skill:"coding"
}


type responseObject={
    postId: number, id: number, name: string, email: string, body: string
}
axios("URL").then((res)=> {
    res.data.array.forEach((element : responseObject) => {
         let length = element.name.length
    });
})