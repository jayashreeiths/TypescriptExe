
  
console.log('Detta är en TypeScript app');

let x = 15;  // datatypen Number

// x = 'Hallå';   <- inte okej! x får bara vara ett Number

let y: boolean;


// let dataFromApi = "nisse"  // hoppsan! en bug i koden
let dataFromApi = [
	{ name: 'Nisse', loves: 'sågspån' },
	{ name: 'Stina', loves: 'citron' }
]

// Dags att använda datan
dataFromApi.forEach(hamster => {
	console.log('Hamster: ', hamster.name);

})

// Om man använder "any" så har man ingen nytta av TypeScript
let z: any = 1;
z = true;
z = 'hej';
z = {}

let input:string = '123';   // explicit data type
let parsed: number = Number(input);  // explicit data type
let implicit = 15;   // implicit data type

function f1(param1: string): void {
	console.log(param1);
}

function f2(param1: string = 'hej') {

}
f2()
f2('hej')

function add(x: number, y: number): number {
	return x + y
	// "1" + 2    <- Vad blir detta?
	// "1" + "2"  <- rätt
	// 1 + 2      <- fel
	// Exempel:
	// Number("1") + 2 == 1 + 2 == 3
}

let answer: number = add(1, 2);
console.log('Answer: ' + answer);

interface Product {
	name: string,
	value: number | null,
	price: number,
	id: string
}

function maybeGetObject(): null | Product {
	if( Math.random() < 0.5 ) {
		return { name: 'example', value: 156, price: 200, id: '123' }
	} else {
		return null;
	}
}



/*
Automatisk typomvandling
string + number -> string + string    <-- superviktig!
string + boolean -> string + string
boolean + string -> string + string
number + boolean -> number + number
string + object -> string + string
2 + 4 + "sträng"
6 + "sträng"
"6" + "sträng"
"6sträng"
string - string -> number - number
"15" + "1"  ->  "151"
"15" - "1"  ->  15 - 1  ->  14
"10" - "fem"  ->  10 - NaN  ->  NaN
1 + 2 * 3 + 4
1 + 6 + 4
7 + 4
11
*/




async function testAsync() {
	const response = await fetch('example');

}
