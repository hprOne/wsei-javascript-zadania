//Zadanie 1:

const tab = ["test", "table", "fuf", 0];    //tabela
console.log(tab[0]);                        //elementy s¹ od miejsca 0.
console.log(tab[1]);
console.log(tab[2]);
console.log(tab[3]);

//Zadanie 2:

const tab = ["test", "table", "fuf", 0];

console.log( tab[0] );                      //1el.
console.log( tab[1] );                      //2el.

console.log(tab[tab.length - 1]);           //ost. el.

for(let i=0;i<tab.length;i++)               //wszystkie elementy
{
    console.log(tab[i]);
}

for(let i=0;i<tab.length;i+=2)              //co drugi el.
{
    console.log(tab[i]);
}

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);                    //wszystkie string
    }
});

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);                    //wszystkie number
    }
});


//Zadanie 3:

const numberArray = [5, 8, 16, 20, 53, 68];     //tablica z numerami

const sum = numberArray.reduce((acc, number) => (acc + number));    //suma wszystkich elementów
console.log(sum)

const dif = numberArray.reduce((acc, number) => (acc - number));    //ró¿nica wszystkich elementów
console.log(dif)

console.log(sum / numberArray.length);      //œrednia wszystkich elementów

numberArray.forEach((value) => {        //elementy parzyste
    if (value % 2 === 0) {
        console.log(value);
    }
})

numberArray.forEach((value) => {        //elementy nieparzyste
    if (value % 2 !== 0) {
        console.log(value);
    }
})

console.log(Math.max(numberArray));     //najwiêksza liczba

console.log(Math.min(numberArray));     //najmniejsza liczba

for (const value of numberArray.reverse()) {            //tablica od ty³u
    console.log(value);
}

//Zadanie 4:

const sumArray = arr => arr.reduce((a,b)=>a+b);     //parametr (tablica) -> suma
console.log(sumArray([1, 3, 5, 7, 9]));

//Zadanie 5:

const calcArray = (arr) => {
    const avg = arr.reduce((acc, number) => (acc + number)) / arr.length;       //liczenie sredniej z tabeli

    arr.map(value => console.log(value * avg))      //mno¿enie elementów przez sredni¹
};

calcArray([0, 2, 4, 8, 20]);

//Zadanie 6:

const sumEven = (arr) => {
    const evenArray = [];

    arr.forEach((value) => {
        if (value % 2 === 0) {                      //szukanie parzystych liczb
            evenArray.push(value);                      //push wartosci
        }
    })

    return evenArray.reduce((acc, number) => (acc + number)) / arr.length;      //œrednia z sumy
}

console.log(sumEven([1, 2, 3, 4, 6, 8, 9]));

//Zadanie 7:

const toSortArray = [5, 6, 1, 8, 2, 9];                //tablica nieposortowana

const sortTab = toSortArray.sort((a, b) => a - b);      //sortowanie elementów tablicy do nowej tablicy
console.log(sortTab);

//Zadanie 8:

const toSumArrayA = [5, 4, 2]
const toSumArrayB = [2, 3, 4]

function sumArraysValue(arrayA, arrayB) {
    let newArray = [];

    arrayA.forEach((num1, i) => {
        newArray.push(num1 + arrayB[i]);            //suma indeksów dwóch tablic
    });

    return newArray;
}

console.log(sumArraysValue(toSumArrayA, toSumArrayB));

//Zadanie 9:

const arrayToEdit = ['AAA', 'BBB', 'CCC'];      //tabela przed edycja

console.log("Przed edycj¹: " + arrayToEdit);

function deleteElement(array, element) {        //funkcja usun element
    let elementIndex = array.indexOf(element);

    if (elementIndex >= 0) {
        array.splice(elementIndex, 1);
    }

    return array;
}

const newArrayDelete = deleteElement(arrayToEdit, "BBB");   //usuwanie elementu

console.log("Po edycji (usuniêto element BBB): " + newArrayDelete);     //console.log

//Zadanie 10:

const arrayToEdit = [-1, 2, 3, -10, 4, -5, -2, 4];           //tablica

console.log("Przed zmian¹: " + arrayToEdit);

function changeArray(array) {
    return array.map(number => (number * (-1)));                //funkcja zmiany znaku poprzez mno¿enie razy (-1)
}

const newArrayChanges = changeArray(arrayToEdit);

console.log("Po zmianie: " + newArrayChanges);