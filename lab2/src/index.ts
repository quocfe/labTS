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

console.log('Bai 2');

// function add(x = 5) {
// 	let pharse: string = 'Result is: ';

// 	return pharse + x;
// }

// let result: string = add();

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
// 	role: Role.AUTHOR,
// 	roletuple: [2, 'author'],
// };

// let favouriteActivites: any[];
// favouriteActivites = [5, 'Sports', true];
// if (person.role === Role.AUTHOR) {
// 	console.log('is author');
// }

// person.roletuple.push('admin');
// person.roletuple[0] = 10;
// person.roletuple = [0, 'admin'];

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

console.log('Bai 6');

// var a = null;
// console.log(a);
// console.log(typeof a);
// var b;
// console.log(b);
// console.log(typeof a);

console.log('Bai 7');

let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Typescript';
// userName = userInput;
userName = <string>userInput;
if (typeof userInput === 'string') {
	userName = userInput;
	console.log(userName);
}
