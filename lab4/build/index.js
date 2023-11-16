"use strict";
console.log('Bài 1');
// interface AddFn {
// (a: number, b: number): number;
// }
// let add: AddFn;
// add = (n1: number, n2: number) => {
// return n1 + n2;
// }
//----//
console.log('Bài 2');
// interface Named {
// 	readonly name?: string;
// 	outputName?: string;
// }
// interface Greetable extends Named {
// 	greet(phrase: string): void;
// }
// let user1: Greetable;
// user1 = new Person();
// // user1.name = 'Manu';
// user1.greet('Hi there - I am');
// console.log(user1);
//---//
console.log('Bài 3');
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
