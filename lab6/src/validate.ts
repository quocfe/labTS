interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[];
	};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['required'],
	};
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['positive'],
	};
}

function validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];

	if (!objValidatorConfig) {
		return true;
	}

	let isValid = true;

	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}

	return isValid;
}

class Course {
	@Required
	title: string | undefined;
	@PositiveNumber
	price: number | undefined;

	constructor(title: string, price: number) {
		this.title = title;
		this.price = price;
	}
}

const form = document.querySelector('form');

form?.addEventListener('submit', (e) => {
	e.preventDefault();

	const titleEl = document.querySelector('#title') as HTMLInputElement;
	const priceEl = document.querySelector('#price') as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;

	const course = new Course(title, price);

	if (!validate(course)) {
		alert('invalid input, please try again');
		return;
	}
});
