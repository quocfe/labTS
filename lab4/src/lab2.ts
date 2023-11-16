// Bai 1
console.log('Bai 1');

// let number1: number = 5;
// let number2: number = 5.4;
// let pharse: string = 'Result is: ';
// let permit: boolean = false;

// const result = number1 + number2;

// if (permit) {
// 	console.log(pharse + result);
// } else {
// 	console.log('Not show result');
// }

//todo convert

// interface IResult {
// 	number1: number;
// 	number2: number;
// 	phrase: string;
// 	permit: boolean;
// 	getResult(): void;
// }

// class Result implements IResult {
// 	number1: number = 5;
// 	number2: number = 5.4;
// 	phrase: string = 'Result is: ';
// 	permit: boolean = false;

// 	getResult(): void {
// 		const result = this.number1 + this.number2;
// 		if (this.permit) {
// 			console.log(this.phrase + result);
// 		} else {
// 			console.log('Not show result');
// 		}
// 	}
// }

// const resultObj = new Result();
// resultObj.getResult();

console.log('Bai 2');

// function add(x = 5) {
// 	let pharse: string = 'Result is: ';

// 	return pharse + x;
// }

// let resultL2: number = add();

// interface IAdd {
// 	add(x?: number): string;
// }

//todo convert

// class Add implements IAdd {
// 	add(x: number = 5): string {
// 		let phrase: string = 'Result is: ';
// 		return phrase + x;
// 	}
// }

// const addObj = new Add();

// const result = addObj.add();
// console.log(result);

console.log('Bai 3');

// var person: {
// 	name: string;
// 	age: number;
// };

// person = {
// 	name: 'string',
// 	age: 12,
// };

// console.log(person.name);

//todo convert

// interface IPerson {
// 	name: string;
// 	age: number;
// }

// class Person implements IPerson {
// 	name: string = 'Typescript';
// 	age: number = 11;
// }

// const newPerson = new Person();
// console.log(newPerson.name);

console.log('Bai 4');

// enum Role {
// 	ADMIN,
// 	READ_ONLY,
// 	AUTHOR,
// }

// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: string | number;
// 	roletuple: [number, string];
// } = {
// 	name: 'Typescript',
// 	age: 11,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: Role.AUTHOR, //Error
// 	roletuple: [2, 'author'],
// };

// let favouriteActivites: any[];
// favouriteActivites = [5, 'Sports', true];
// if (person.role === Role.AUTHOR) {
// 	console.log('is author');
// }

// person.roletuple.push('admin');
// person.roletuple[0] = 10; //Error
// person.roletuple = [0, 'admin']; //Error

//todo convert

// enum Role {
// 	ADMIN,
// 	READ_ONLY,
// 	AUTHOR,
// }

// interface IPerson {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: Role;
// 	roletuple: [number, string];
// }

// class Person implements IPerson {
// 	name: string = 'Typescript';
// 	age: number = 11;
// 	hobbies: string[] = ['Sports', 'Cooking'];
// 	role: Role = Role.AUTHOR;
// 	roletuple: [number, string] = [2, 'author'];
// }

// const personObj = new Person();
// if (personObj.role === Role.AUTHOR) {
// 	console.log('is author');
// }

console.log('Bai 5');

// type Combinable = number | string;
// function combine(
// 	input1: Combinable,
// 	input2: number | string,
// 	resultConversion: 'as-number' | 'as-text'
// ) {
// 	let result;
// 	if (
// 		(typeof input1 === 'number' && typeof input2 === 'number') ||
// 		resultConversion === 'as-number'
// 	) {
// 		result = +input1 + +input2;
// 	} else {
// 		result = input1.toString() + input2.toString();
// 	}
// 	return result;
// }

// const combineNumber = combine(30, 26, 'as-number');
// console.log('combineNumber', combineNumber);
// const combineStringNumber = combine('30', '26', 'as-number');
// console.log('combineStringNumber', combineStringNumber);
// const combineText = combine('Typescript Vs', 'Javascript', 'as-text');
// console.log('combineText', combineText);

//todo convert

// type CombineType = number | string;

// interface ICombine {
// 	combine(
// 		input1: CombineType,
// 		input2: CombineType,
// 		resultConversion: 'as-number' | 'as-text'
// 	): CombineType;
// }

// class Combine implements ICombine {
// 	combine(
// 		input1: CombineType,
// 		input2: CombineType,
// 		resultConversion: 'as-number' | 'as-text'
// 	): CombineType {
// 		let result;
// 		if (
// 			(typeof input1 === 'number' && typeof input2 === 'number') ||
// 			resultConversion === 'as-number'
// 		) {
// 			result = +input1 + +input2;
// 		} else {
// 			result = input1.toString() + input2.toString();
// 		}
// 		return result;
// 	}
// }

// const combineObj = new Combine();
// const combineNumber = combineObj.combine(30, 26, 'as-number');
// console.log('combineNumber', combineNumber);
// const combineStringNumber = combineObj.combine('30', '26', 'as-number');
// console.log('combineStringNumber', combineStringNumber);
// const combineText = combineObj.combine(
// 	'Typescript Vs',
// 	'Javascript',
// 	'as-text'
// );
// console.log('combineText', combineText);

console.log('Bai 6');

// //Variable declared and assigned to null
// var a = null;
// console.log(a);
// console.log(typeof a);
// //Variable declaration without assigning any value to it
// var b;
// console.log(b);
// console.log(typeof a);

console.log('Bai 7');

// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = 'Typescript';
// userName = <string>userInput;
// if (typeof userInput === 'string') {
// 	userName = userInput;
// 	console.log(userName);
// }

//todo convert

// interface IUserInput {
// 	userInput: unknown;
// 	userName: string;
// 	handleUserInput(): void;
// }

// class UserInput implements IUserInput {
// 	userInput: unknown;
// 	userName: string;

// 	handleUserInput(): void {
// 		this.userInput = 5;
// 		this.userInput = 'Typescript';
// 		if (typeof this.userInput === 'string') {
// 			this.userName = this.userInput;
// 			console.log(this.userName);
// 		}
// 	}
// }

// const userInputObj = new UserInput();
// userInputObj.handleUserInput();
