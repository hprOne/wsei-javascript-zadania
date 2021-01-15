//Zadanie 1:

function Person(name, surname, age, country, city, language) {      //konstruktor Person
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = function (age) {           //funkcja zmiany wieku
        this.age = age;
    }

    this.changeCity = function (city) {         //funkcja zmiany miasta
        this.city = city;
    }
}

const persons = [
    new Person('W³adek', 'Kowalski', 45, 'Poland', 'Cracow', 'pl'),
    new Person('Zdzisiek', 'Nowak', 62, 'Poland', 'Warszawa', 'pl'),
    new Person('Pietrek', 'Kogucik', 30, 'Poland', 'Morenka', 'pl'),
    new Person('Ted', 'Ex', 18, 'USA', 'Cracow', 'eng'),
    new Person('Zbigniew', 'Stonoga', 41, 'Norway', 'Oslo', 'eng'),
];

console.log(persons);

persons[0].changeCity("Sopot");
persons[0].changeAge(Math.floor(Math.random() * 100));
persons[1].changeCity("Pary¿");
persons[2].changeAge(Math.floor(Math.random() * 100));
persons[3].changeAge(Math.floor(Math.random() * 100));
persons[4].changeCity("Tomaszowice");

console.log(persons);

//Zadanie 2:

function calc(){
    this.memory = [],
    this.add = function(a, b) {             //funkcja dodawania
        this.memory.push('Dodawanie');
        console.log(a + b);
    };
    this.sub = function(c,d) {              //funkcja odejmowanie
        this.memory.push('Odejmowanie');
        console.log(c - d);
    };
    this.mul = function(e,f) {              //funkcja mnozenie
        this.memory.push('Mno¿enie');
        console.log(e * f);
    };
        this.div = function(g,h) {          //funkcja dzielenie
        this.memory.push('Dzielenie');
        console.log(g / h);
    };
        this.clearMemory = function() {     //czyszczenie pamieci
        this.memory = [];
    };
    this.showMemory = function() {          //pokaz pamiec
        console.log(this.memory);
    }
}

const calc1 = new calc();                       
calc1.add(2,2)
calc1.sub(2,3)
calc1.mul(3,3)
calc1.div(12,3)
calc1.showMemory()

//Zadanie 3:

function NumberGame() {
    this.randomNumber = function () {
        NumberGame.prototype.changeNumberInterval = setInterval(function () {
            NumberGame.prototype.number = Math.round(Math.random() * 10);               //losowanie numeru (1-10)
        }, 1000);                                                                       //co sekunde
    };
    this.checkStopExecute = function () {
        NumberGame.prototype.checkStopExecuteInterval = setInterval(() => {
            console.log("Sprawdzam numer: " + NumberGame.prototype.number);

            if (NumberGame.prototype.number <= 5) {                                     //warunek wiêkszy od 5
                return;
            }

            clearInterval(NumberGame.prototype.changeNumberInterval);
            clearInterval(NumberGame.prototype.checkStopExecuteInterval);
        }, 1000);
    };
}

const numberGame1 = new NumberGame();
const numberGame2 = new NumberGame();
numberGame1.randomNumber();
numberGame2.checkStopExecute();