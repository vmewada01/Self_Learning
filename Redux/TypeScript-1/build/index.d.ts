declare let isFinished: boolean;
declare let amount: Number;
declare let first_name: string;
declare let last_name: string;
declare let full_name: string;
declare let array1: number[];
declare let array2: string[];
declare let array3: Array<number>;
type person = {
    name: string;
    age: Number;
    workingDays?: Number;
};
type address = string;
type softwareengineer = {
    skill: string;
};
declare let addr: address;
declare let obj1: person;
declare let addPerson: person[];
declare let tuple: [string, string];
declare let both: [string, Number];
declare let touple_example: [string, Number, string];
declare enum Color {
    RED = "RED",
    BLUE = "BLUE",
    GREEN = "GREEN"
}
declare let u: undefined;
declare let n: null;
declare let a: any;
declare function sum(a: number, b: number): number;
declare const printPerson: ({ name, age }: person) => void;
declare let output: (number | string)[];
declare let student: person & softwareengineer;
type responseObject = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};
