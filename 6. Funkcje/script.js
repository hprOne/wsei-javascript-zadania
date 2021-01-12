//Zadanie 1:

let x = 2;                      

const text = (x) => {           //wywo³anie funkcji text
  console.log("Uda³o siê!");
}

text();

//Zadanie 2:

const x = (param) =>{           //funkcja przyjmuje parametr
  return param;
}
console.log(x(2))               //parametr 2

//Zadanie 3:

const array = (param) =>{       //funkcja przyjmuje parametr
    return param;
}
array([1,2,3]);                 //parametrem jest tablica, zwraca tablice

//Zadanie 4:

const printString = (str) => {              //funkcja printString
    let count = 0;                          //licznik do 5
    let time = setInterval(() => {
        console.log(str);
        count++                             //licznik++
        if (count >= 5) {
            clearInterval(time);
            console.log('Koniec');
        }
    }, 3000)                                //interwal 3000ms
}
printString('string');