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

document.body.appendChild(favouriteFruitsList);

//Zadanie 3:

favouriteFruitsList.addEventListener('click', () => {                                    //event listener
    Array.from(favouriteFruitsList.children).forEach((listElement, index) => {      //dla kazdego elementu sprawdzanie miejsca w tabeli
        if (index % 2 === 1) {                                              //usun co drugi element z listy
            favouriteFruitsList.removeChild(listElement);
        }
    });
});

//Zadanie 4:

let przycisk = document.createElement('button');                            //przycisk utworz
przycisk.innerText = 'Usuñ mnie';
przycisk.addEventListener('click', function() {                             //listener na klikniêcie
    root.removeChild(this);
})

root.appendChild(przycisk);                                                 //wyœwietlenie przycisku


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

//Zadanie 7:

const table = ["obj1", "obj2", "test1", "test2", "check1", "check2"];       //tabela 6elem.
const list1 = document.createElement("ul");                                 //dwie listy
const list2 = document.createElement("ul");
const button1 = document.createElement("button");                           //dwa przyciski
const button2 = document.createElement("button");
const buttonText = "Przenieœ";

table.forEach((e) => {                                                      //przeniesienie elem z tabeli do listy
  const li = document.createElement("li");
  li.innerText = e;
  list1.appendChild(li);
});

document.body.appendChild(list1);
document.body.appendChild(button1);
button1.textContent = buttonText;

button1.addEventListener("click", () => {                               //listener na przycisk
  const lastItem1 = list1.lastChild;                                    //podstawienie dwóch ostatnich elementów listy
  const lastItem2 = list2.lastChild;

  list2.insertBefore(lastItem1, lastItem2);                             //przeniesienie elem z listy1 do listy2

  if (list1.children.length === 0) {
    button1.disabled = true;                                            //blokada przycisku gdy lista jest z zeroma elementami
  } else {
    button2.disabled = false;
  }
});

document.body.appendChild(list2);
document.body.appendChild(button2);
button2.textContent = buttonText;

button2.addEventListener("click", () => {                               //listener na przycisk
  const lastItem1 = list1.lastChild;
  const lastItem2 = list2.lastChild;

  list1.insertBefore(lastItem2, lastItem1);                             //przeniesienie elem z listy1 do listy2

  if (list2.children.length === 0) {
    button2.disabled = true;
  } else {
    button1.disabled = false;                                           //blokada przycisku gdy lista jest z zeroma elementami
  }
});

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