//Zadanie 1:

function getTagElem(elements) {                                     //funkcja - tablica tagów utworzona przez parametr
    const tags = [];
    for (const element of elements) {
        tags.push(element.tagName.toLowerCase());
    }
    return tags;
}

console.log(getTags(document.getElementsByClassName('more-divs')));     //wyœwietlenie w konsoli listy elementow o klasie more-divs

//Zadanie 2:

function showInfo(element) {
    console.log(element.innerHTML);             //wewnêtrzy HTML
    console.log(element.outerHTML);             //zewnêtrzny HTML
    console.log(element.classList.value);       //lista klas elementu - string
    console.log(element.classList);             //lista klas elementu - tabela
    console.log(element.dataset);               //obiekt dataset
}

showInfo(document.getElementsByClassName('short-list')[0]);     //parametr short-list + wywo³anie funkcji

//Zadanie 3:

function mathDataset(element) {
    const firstNumber = parseInt(element.dataset.numberone);        //1-wsza liczba
    const secondNumber = parseInt(element.dataset.numbertwo);       //2-ga liczba
    const thirdNumber = parseInt(element.dataset.numberthree);      //3-cia liczba

    return {'sum': (firstNumber + secondNumber + thirdNumber), minus: (firstNumber - secondNumber - thirdNumber)};  //plus i minus
}

console.log(mathDataset(document.getElementById('datasetCheck')));  //wywo³anie funkcji + wypisanie do konsoli

//Zadanie 4:

document.getElementById('spanText').innerHTML = 'dowolny';      //tekst w elemencie spanText

//Zadanie 5:

document.getElementById('spanText').className('dowolnaklasa');  //klasa elementu spanText

//Zadanie 6:

function modifyClassList(elementClassList) {                    //funkcja 
    let allClass = '';
    elementClassList.forEach((singleClass) => {
        allClass += ' + ' + singleClass;                        //³¹czenie string z plusem
        console.log(singleClass);
    });

    console.log(allClass.slice(3, allClass.length));

    elementClassList.value = '';                                //usuniêcie wszystkich klas
    console.log('Usuniêto wszystkie klasy');
}

modifyClassList(document.getElementById('classes').classList);      //przyjêcie listy klas "classes"

//Zadanie 7:

function longListElements(listOfElements){              //funkcja szukaj¹ca elementów z parametru
	listOfElements.forEach((elem) => {                  //dla ka¿dego elementu
		
		console.log(elem.dataset.text);                 //dodaj atrybut
		
		if(elem.dataset.text === undefined){            //atrybut nieokreœlony - dodaj text
			elem.dataset.text = "text";
		}
	});
}

longListElements(document.querySelector("#longList").querySelectorAll("li"));   //wywo³anie funkcji

//Zadanie 8:

function saveStringToObj(string) {          //funkcja przyjmuj¹ca parametr string
  const obj = {
    newClass: string                        //zapisanie parametru w postaci obiektu
  }
  return obj;
}

function addNewClassToDiv(obj) {
  const newClass = obj.newClass;            //oczytanie string - zapisanie do zmiennej
  document.getElementById('myDiv').classList.add(newClass);             //klasa dla elementu o id myDiv
}

addNewClassToDiv(saveStringToObj('string_z_parametru'));            //wywo³anie funkcji dla string_z_parametru

//Zadanie 9:

function randomNumbersClass(newClassNumber){                        //funkcja dodaj¹ca odpowiedni¹ klasê
	let element = document.querySelector("#numbers");
	
	if(newClassNumber % 2 === 0){                               //liczba nieparzysta - even
		element.classList.add("even");
	}
	else{
		element.classList.add("odd");                           //dla liczby parzystej - odd
	}
}

randomNumbersClass(Math.floor(Math.random() * 10));             //losowy parametr 0-10

addClassForNumber(randomNumber);                                //wywo³anie funkcji

//Zadanie 10:

function getValues(elements) {                                          //funkcja zwracaj¹ca wartoœci pobrane z elementów listy
    const result = [];                                                  //tablica

    elements.forEach((element) => {
       result.push(element.innerText);                                  //wypchniêcie do tablicy
    });

    return result;
}

console.log(getValues(document.querySelectorAll('#longList > li')));        //wypisanie do konsoli

//Zadanie 11:

function longListChildren(childs){
	childs.forEach((elem) => {                              //dla ka¿dego elementu 
		elem.dataset.data = elem.innerText;                 //stara wartoœæ do data-atrybutu
		elem.innerText = Math.floor(Math.random() * 10);    //losowa liczba 0-10
	})
}

longListChildren(document.querySelector("#longList").querySelectorAll("li"));   //wywo³anie funkcji