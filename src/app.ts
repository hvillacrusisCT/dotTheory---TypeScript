let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log('Clicked! ' + message);
}
// a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
// Arrow function with default parameter and rest parameters
const arrowFunction = (defaultParam: string = 'Default', ...restParams: string[]): string[] => {
  return [defaultParam, ...restParams];
}

// Arrow function that returns an array
const arrayFunction = (): string[] => {
  return ['arrayElement1', 'arrayElement2', 'arrayElement3'];
}

// Arrow function that returns an object
const objectFunction = (): {[key: string]: string} => {
  return {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
}

// Destructuring array
let [element1, element2, element3]: string[] = arrayFunction();

// Destructuring object
let {key1, key2, key3}: {[key: string]: string} = objectFunction();

// Demo arrowFunction
console.log(arrowFunction('Custom', 'rest1', 'rest2', 'rest3'));

// Demo arrayFunction and destructuring
console.log(`Element 1: ${element1}, Element 2: ${element2}, Element 3: ${element3}`);

// Demo objectFunction and destructuring
console.log(`Key1: ${key1}, Key2: ${key2}, Key3: ${key3}`);
