//Zadanie 1:

let x = true,
	y = false;

console.log(x===y);				//false

//Zadanie 2:

const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo		//% - reszta z dzielenia
console.log(moduloResult);			//1

//Zadanie 3:

let stringResult = "",
	a = "test",
	b = " foo";

stringResult = a + b;
console.log(stringResult);			//"test" + " foo" = "test foo"

//Zadanie 4:

var someNumber = 425;
var someString = "425"

console.log(someNumber==someString);			//value=true - wartoœci siê zgadzaj¹
console.log(someNumber===someString);			//value=false - string nie jest liczb¹

//Zadanie 5:

let counter = 30

console.log(counter);	//30

counter++
console.log(counter);	//31

counter--
console.log(counter);	//30

//Zadanie 6:

let n1 = 5,
	n2 = 6,
	result = null;		//result - typ boolean

result = n1 > n2;

console.log(result);	//false