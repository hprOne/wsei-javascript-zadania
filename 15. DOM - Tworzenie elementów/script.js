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

function createStructure(obj, parent) {										//struktura z obiektu
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