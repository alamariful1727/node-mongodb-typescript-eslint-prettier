type printNameType = (name: string) => string;

const printName: printNameType = (name) => {
	return `Hello, ${name}`;
};

console.log(printName("Arif"));
