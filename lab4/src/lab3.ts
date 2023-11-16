console.log('Bài 1:');

// const sumArrowFn = (): number => {
// 	const num1 = 5;
// 	const num2 = 10;
// 	const sum = num1 + num2;
// 	return sum;
// };

///-----////
// function sum(): number {
// 	const num1 = 5;
// 	const num2 = 10;
// 	const sum = num1 + num2;
// 	return sum;
// }

///-----////
// const sum = (
// 	num1: number,
// 	num2: number = 0,
// 	num3?: number,
// 	...rest: number[]
// ): number => {
// 	let total = num1 + num2;

// 	if (typeof num3 === 'number' && num3 !== undefined) {
// 		total += num3;
// 	}
// 	total += rest.reduce((a, b) => a + b, 0);

// 	return total;
// };

// sum(1, 2, '3', 4, 5, 6, 7, 8);

///-----////
// const hobbies = ['Sports', 'Cooking'];
// const activehobbies = ['Hiking'];
// activehobbies.push(hobbies);
// activehobbies.push(hobbies[0], hobbies[1]);
// activehobbies.push(...hobbies);
// console.log(activehobbies);

//todo convert

// interface IHobbies {
// 	activeHobbies: string[];
// }

// class Hobbies implements IHobbies {
// 	activeHobbies: string[] = [];

// 	constructor() {
// 		const hobbies = ['Sports', 'Cooking'];
// 		this.activeHobbies.push(...hobbies);
// 	}
// }

// const hobbiesObj = new Hobbies();
// console.log(hobbiesObj.activeHobbies);

console.log('Bài 2');

// ---- ///
// let sum = (x: number = 5, y?: number) => {
// 	return x + <number>y;
// };
// let speech = (output: any): void => {
// 	console.log('Result:' + output);
// };
// speech(sum(5, 12));
// console.log(speech(sum(8, 5)));

//todo convert

// interface ISpeech {
// 	sum(x: number, y?: number): number;
// 	speech(output: any): void;
// }

// class addSpeech implements ISpeech {
// 	sum(x: number, y?: number | undefined): number {
// 		return x + <number>y;
// 	}

// 	speech(output: any): void {
// 		console.log('Result:' + output);
// 	}
// }

// const newSpeech = new addSpeech();

// newSpeech.speech(newSpeech.sum(3 + 5));

//---///

// function AddandHandle(x: number, y: number, cb: (num: number) => void) {
// 	const result = x + y;
// 	cb(result);
// }
// AddandHandle(10, 20, (result) => {
// 	console.log(result);
// });

//todo convert

// interface IAddandHandle {
// 	addandhandler(x: number, y: number, cb: (num: number) => void): void;
// }

// class AddAndhandler implements IAddandHandle {
// 	addandhandler(x: number, y: number, cb: (num: number) => void) {
// 		const result = x + y;
// 		cb(result);
// 	}
// }

// const addAndHandleObj = new AddAndhandler();
// addAndHandleObj.addandhandler(10, 20, (result) => {
// 	console.log(result);
// });

//---//
