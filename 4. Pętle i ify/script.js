//Zadanie 1:

let n1 = 15,
    n2 = 60;

if(n1>n2) {                                             // porównanie wartoœci - wyœwietlenie wiêkszej
  console.log(n1)
}else (console.log(n2))

//Zadanie 2:

let n1 = 2,
    n2 = 7,
    n3 = 5;

if(n1>n2 && n1>n3) {                                    // wyœwietlenie najwiêkszej wartoœci spoœród trzech
  console.log(n1 + ' jest najwiêksze');
}else if (n2>n1 && n2>n3) {
  console.log(n2 + ' jest najwiêksze');
}else {
  console.log(n3 + ' jest najwiêksze');
}

//Zadanie 3:

for (let i=0; i<10; i++) {                              // 10 razy wyœwietlanie zdania - counter od 0 do 9
  console.log("Lubie JavaScript")
}

//Zadanie 4:

let result = 0;

for(i=0; i<=10; i++) {                                  // sumowanie wszystkich liczb od 0 do 10
  result +=i;
}
console.log(result);

//Zadanie 5:

var n = 5;

for(i=0; i<n; i++) {                                    // pêtla for
  if(i%2===0){                                          // modulo 2 
    console.log(i + " parzysta")
  }else{
    console.log(i + " nieparzysta")
  }
}

//Zadanie 6:

let n = 5;

for(let i=0; i<n; i++){                                 // pêtla for
  for(let j=0; j<n; j++){
    console.log("i= " + i + ", j=" + j);
  }
}

//Zadanie 7:
for(let i=0; i<=100; i++) {                             // pêtla for
  if ( i%3===0 && i%5===0) {
    console.log(`${i} FizzBuzz`);
  } else if ( i%3===0) {
      console.log(`${i} Fizz`);
  } else if ( i%5===0) {
      console.log(`${i} Buzz`);
  } else {
      console.log(`${i}`);
  }
}

//Zadanie 8a:

let star = 5,
    result = '';

for(let i=1; i<=star; i++){
  for(let j=0; j<i; j++){
    result += "*";
  }
  console.log(result);
  result=""
}

//Zadanie 8b:

let star = 4,
    space = 4,
    result = '';

for(let i=0; i<=star; i++){
  result = ' '.repeat(space) + "*";
  space--
  for(let j=0; j<i; j++){ 
    result += " *";
  }
  console.log(result);
  result=""
}

//Zadanie 8c:

let star = 4,
    space = 4,
    result = '';

for(let i=0; i<=star; i++){
  result = ' '.repeat(space) + "*";
  space--
  for(let j=0; j<i; j++){ 
    result += "**";
  }
  console.log(result);
  result=""
}

//Zadanie 8d:

let string = "*1234";

for (let i = 1; i <= 11; i++) {
  if (i === 6) {
    console.log("-----");
  } else if (i < 6) {
    console.log("*".repeat(i) + string.slice(i));
  } else {
    console.log("*".repeat(12 - i) + string.slice(12 - i));
  }
}

//Zadanie 8e:

let star = 4,
    space = 4,
    result = '';

for(let i=0; i<=star; i++){
  result = ' '.repeat(space) + "*";
  space--
  for(let j=0; j<i; j++){ 
    result += " *";
  }
  console.log(result);
  result=""
}
space = star;
for(let i=0; i<3; i++){
  result = ' '.repeat(space) + "*"
  console.log(result)