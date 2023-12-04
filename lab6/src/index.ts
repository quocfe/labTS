function AutoBind(target: any, key: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	const adjDescripor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};
	return adjDescripor;
}

class Printer {
	message = 'this work';
	@AutoBind
	showMessage() {
		console.log(this.message);
	}
}

const p = new Printer();
p.showMessage();

const btn = document.querySelector('button');

btn?.addEventListener('click', p.showMessage);
