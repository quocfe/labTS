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
// // activehobbies.push(hobbies);
// activehobbies.push(hobbies[0], hobbies[1]);
// activehobbies.push(...hobbies);
// console.log(activehobbies);

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

//---///

// function AddandHandle(x: number, y: number, cb: (num: number) => void) {
// 	const result = x + y;
// 	cb(result);
// }
// AddandHandle(10, 20, (result) => {
// 	console.log(result);
// });

//---//
