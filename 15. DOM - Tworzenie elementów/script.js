//Zadanie 1:

const newDiv = document.createElement('div');           //nowy element div
newDiv.innerText = 'To jest nowy element.';
document.body.insertBefore(newDiv, document.getElementById('root'));        //dodanie do strony (body)

//Zadanie 2:

const favouriteFruits = ['jab³ko', 'gruszka', 'truskawka', 'malina', 'borowka amerykanska', 'wiœnia'];  //ulubione owoce

const favouriteFruitsList = document.createElement('ul');               //lista

favouriteFruits.forEach((fruit) => {
    const fruitElement = document.createElement('li');
    fruitElement.innerText = fruit;

    favouriteFruitsList.append(fruitElement);
});

newDiv.append(favouriteFruitsList);

//Zadanie 3:

newDiv.addEventListener('click', () => {                                    //event listener
    Array.from(favouriteFruitsList.children).forEach((listElement, index) => {      //dla kazdego elementu sprawdzanie miejsca w tabeli
        if (index % 2 === 1) {                                              //usun co drugi element z listy
            favouriteFruitsList.removeChild(listElement);
        }
    });
});

//Zadanie 4:

document.getElementById('ex4').addEventListener('click', (event) => {       //utworzenie button
    event.target.remove();                                                  //usuniecie po nacisnieciu
});

//Zadanie 5:

for (let i = 0, limit = Math.random() * 10; i < limit; i++) {               //dla max=losowa liczba
	const div = document.createElement('div');                              //utwórz div
	div.innerText = `To jest div numer ${i}`;                               //tekst div
	root.appendChild(div);
}

//Zadanie 6:

let object1 = {																//obiekt z div i span
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span'
}

function createStructure (obj, parent) {										//struktura z obiektu
	for(let key in obj){
		let elem = document.createElement(key.substr(0, key.length - 1));
		
		if(typeof obj[key] === "object"){
			createStructure(obj[key], elem);
		}
		else {
			elem.innerText = obj[key];
		}
		
		parent.appendChild(elem);
	}
}

createStructure(object1, document.querySelector("#root"));				//wywo³anie funkcji


//Zadanie 11:

function checkNumbers (text) {
    const reg = /\d/g;													// \d - liczby, flaga g - wszystkie wyst¹pienia
    const match = text.match(reg);
    let sum = 0;
    let ratio = 1;
    match.forEach(num => {												//kazda liczba suma
        sum += parseInt(num);
        ratio *= parseInt(num);											//iloczyn
    })
    console.log(`Suma: ${sum}`);
    for(let i = 0; i < ratio; i++) {									//tworzenie div z iloczcynu
        const newDiv = document.createElement('div');
        newDiv.textContent = text;
        document.body.appendChild(newDiv);
    }
}

checkNumbers('Na górze 7 na dole nudy, dlaczego JS jest taki trudny?');		// :(

//Zadanie 12:

const createObj = (text) => {
	const obj = {
		text,
		checkStr() {
			if (this.text === 'Ala') {				//jeœli string zawiera "Ala"
				this.text = 'Ola';					//zamiana na "Ola"
			} else {
				const doc = document.createElement('div');
				doc.innerText = 'S³owo Ala nie wystêpuje w tekœcie.';
				document.body.appendChild(doc);
			}
		},
	};
	obj.checkStr();
};
createObj('Ala')
createObj('fala')		//nie ma 'Ala'

//Zadanie 13:

const tableStr = ["A8nBV29sx90", "362x191Z2a"];                         //tabela z cyframi

function sumLettersInString(value){                                     //suma liter
    let numbers = 0;
    value.forEach(item => {
        const textWithoutNumbers = item.replace(/\d+/g, "");            // \d - liczby, flaga g - wszystkie wyst¹pienia
        numbers += textWithoutNumbers.length;
    })
    console.log(numbers);
}

sumLettersInString(tableStr);                                           //wywo³anie funkcji

function sumNumbers(value){                                             //suma cyfr
    let sum = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {                      //szukanie cyfr
            sum+=(Number(number));
        })       
    })
    console.log(sum);
}

sumNumbers(tableStr);                                                   //wywo³anie funkcji

function avgNumbers(value){                                             //œrednia z cyfr
    let sum = 0;
    let letters = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {                      //szukanie cyfr
            sum+=(Number(number));
            letters = number.length;
        })    
    })
    const avg = sum/letters;                                            //œrednia/d³ugoœæ
    console.log(avg);
    return avg;
}
avgNumbers(tableStr);                                                   //wywo³anie funkcji

//Zadanie 14:

let objectPerson = {
	name: '',
	surname: '',
	age: '',
};
const checkStringLength = (name, surname, age) => {
	const old = Object.assign({}, objectPerson);		//savfile
	objectPerson = { name, surname, age, namel: name.length, surnamel: surname.length, agel: age.length };		//dlugosci string do zmiennych
	console.log(objectPerson);
	if (name.length > 5 || surname.length > 5 || age.length > 5) {			//string dluzszy niz 5
		const buttn = document.createElement('button');					//przycisk o nazwie powrót do stanu pocz. (old)
		buttn.innerText = 'Powrót do stanu pocz¹tkowego';
		buttn.onclick = () => console.log((objectPerson = old));
		root.appendChild(buttn);
	}
};
checkStringLength('NameTest', 'SurnameTest', '40');				//wywo³anie funkcji