//Zadanie 1:

function Person(name, surname, age, country, city) {                    //konstruktor Person
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.favDish = [];                                                  //do zadania 2
    this.showDetails = function () {
        console.log(`name: ${this.name} ${this.surname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }
    this.addOneYear = function () {
        ++this.age;
    }
}

const person = new Person('Tadeusz', 'Nowak', 33, 'Poland', 'Warsaw');
const person2 = new Person('Micha³', 'Kowalski', 62, 'Poland', 'Wroclaw');

person.showDetails();
person.addOneYear();
person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.showDetails();

//Zadanie 2:

Person.prototype.addNewFavDishes = function (name) {                    //Dodawanie potraw
    this.favDish.push(name);
}

Person.prototype.showFavDishes = function () {                          //Wyœwietlanie potraw
    console.log("Favourite dishes is: " + this.favDish.join(', '))
}

person.showFavDishes();
person.addNewFavDishes('Chicken Curry');
person.addNewFavDishes('Hawaian Pizza');
person.showFavDishes();

person2.addNewFavDishes('Chicken Soup');
person2.showFavDishes();


// 3

function Calc(num1, num2) {                                     //konstruktor Calc
    this.num1 = num1;
    this.num2 = num2;

    this.add = function () {                                    //Dodawanie
        return (this.num1 + this.num2);
    }
    this.sub = function () {                                    //odejmowanie
        return (this.num1 - this.num2);
    }
    this.mul = function () {                                    //mnozenie
        return (this.num1 * this.num2);
    }
    this.div = function () {                                    //dzielenie + wyj¹tek
        if (!num2)
            throw new Error("Dzielenie przez zero!!");
        return this.num1 / this.num2;
    }
}

const calc1 = new Calc(3, 5);
const calc2 = new Calc(6, 2);
const calc3 = new Calc(3, 0);

console.log(calc1.sum());
console.log(calc1.sub());

console.log(calc2.mul());
console.log(calc2.div());

console.log(calc3.div());

// 4

function Ladder(maxSteps, dangerJumpStep) {
    this.maxSteps = maxSteps;
    this.dangerJumpStep = dangerJumpStep;
    this.currentStep = 0;

    this.goUp = function () {                                   //wyjœcie stopieñ wy¿ej
        ++this.currentStep;

        if (this.currentStep >= this.maxSteps) {
            this.currentStep = this.maxSteps;
            console.log('Jesteœ najwy¿ej jak siê da');

            return;
        }

        console.log('Do koñca drabiny zosta³o Ci ' + (this.maxSteps - this.currentStep)) + ' stopni.';
    };

    this.goDown = function () {                                 //zejœcie stopieñ ni¿ej
        --this.currentStep;

        if (this.currentStep <= 0) {
            this.currentStep = 0;
            console.log('Jesteœ na ziemi');

            return;
        }

        console.log('Do ziemi zosta³o Ci ' + (this.maxSteps - (this.maxSteps - this.currentStep))) + ' stopni.';
    };

    this.jumpToTheGround = function () {                        //zeskoczenie z drabiny
        if (this.currentStep > this.dangerJumpStep) {
            console.log('Ojoj...');
        } else {
            console.log('Leganckie l¹dowanie!');
        }

        this.currentStep = 0;
    };
}

const ladder = new Ladder(6, 1);
//up
ladder.goUp();
ladder.goUp();
ladder.goUp();
ladder.goUp();
ladder.goUp();

//down
ladder.goDown();
ladder.goDown();
ladder.goDown();
ladder.goDown();
ladder.goDown();

//up and down

ladder.goUp();
ladder.goDown();
ladder.goUp();
ladder.goDown();

//jump dangerous

ladder.goUp();
ladder.goUp();
ladder.goUp();
ladder.jumpToTheGround();

// jump ok

ladder.goUp();
ladder.jumpToTheGround();