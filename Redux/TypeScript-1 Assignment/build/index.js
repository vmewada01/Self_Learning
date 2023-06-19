//Boolean
let isFetching = false;
isFetching = true;
//Number
let age = 100;
//strings
let first_name = "Masai";
let last_name = "School";
let full_name = `${first_name} ${last_name}`;
// full_name = 100
///Array
let array1 = [1, 2, 3, 4, 5];
let array2 = ["vishal", "safal", "jatin", "Naresh"];
let array3 = [4, 5, 6, 7];
let addr = "India";
let obj1 = {
    name: "Vishal",
    age: 22
};
let addPerson = [{ name: "Naresh", age: 26 }];
//Tuples Array 
// let a: string = "school"
// let b: string = "masai"
let tuple = ["masai", "school"];
let tuple2 = ["string", false];
let both = ["vishal", 22];
let touple_example = ["safal", 10, "jatin"];
///Enumd -> A group of named constants 
var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["BLUE"] = "BLUE";
    Color["GREEN"] = "GREEN";
})(Color || (Color = {}));
var userEnum;
(function (userEnum) {
    userEnum[userEnum["User"] = 0] = "User";
    userEnum[userEnum["SuperUser"] = 1] = "SuperUser";
    userEnum[userEnum["Admin"] = 2] = "Admin";
    userEnum[userEnum["SuperAdmin"] = 3] = "SuperAdmin";
})(userEnum || (userEnum = {}));
///console.log(Color)
console.log(userEnum);
let u;
let n;
let a;
function sum(a, b) {
    return a + b;
}
function product(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(sum(1, 2));
console.log(product(1, 2));
console.log(divide(6, 3));
const printPerson = ({ name, age }) => {
    console.log(`${name} ${age}`);
};
printPerson(obj1);
//Unions A U B --> 
let output;
output = ["masai", 22, 22, "safal"];
// output =[true, "vishal"]
//Intersection --> 
let student = {
    age: 20,
    name: "vishal",
    skill: "coding"
};
//# sourceMappingURL=index.js.map