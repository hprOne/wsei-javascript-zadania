//Zadanie 1:

const car = {                   //obiekt car
    vin: "1HGCM82633A004352",
    model: "Dodge Viper SRT",
    engine: "diesel",
    status: "free",
    changeStatus: function (x) {
    this.status = x;
    }

console.log(car.vin);
console.log(car.model);
console.log(car.engine);
console.log(car.status);

//Zadanie 2:

car.changeStatus("taken");      //zmiana statusu auta na zabrany
console.log(car.status);

//Zadanie 3:

const numbers = {
    sum: 0,
    sumNumbersInArray: function (array) {               //liczenie elementów z tablicy
        this.sum = array.reduce((acc, number) => (acc + number));
    }
}

numbers.sumNumbersInArray([0, 6, 5, 44, 100])
console.log(numbers.sum);

//Zadanie 4:

const car = {                   //obiekt car
    vin: "1HGCM82633A004352",
    model: "Dodge Viper SRT",
    engine: "diesel",
    status: "free",
    client: {
      name: "Jarek",
      surname: "Nieznany",
    }
}

for (const key in car) {                //wypisywanie w³aœciwoœci obiektu
    console.log(key + ': ' + car[key]);
}

//Zadanie 5:

console.log(car.client.name);           //wypisywanie w³aœciwoœci obiektu
console.log(car.client.surname);

//Zadanie 6:

car.type = "Cabriolet";                 //dodanie w³aœciwoœci
car.soundOnEngineStart = function () {
    return "Hello";
}

console.log(car.type);                  //wypisywanie w³aœciwoœci obiektu
console.log(car.soundOnEngineStart());