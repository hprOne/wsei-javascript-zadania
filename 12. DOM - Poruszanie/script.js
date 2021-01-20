//Zadanie 1:

console.log(document.querySelector("#buz").parentElement)				//Rodzic elementu "buz"

console.log(document.querySelector("#baz").previousElementSibling)		//Brat elementu "baz"

console.log(document.querySelector("#foo").childNodes)					//Dzieci elementu "foo"

console.log(document.querySelector("#foo").parentElement)				//Rodzic elementu "foo"

console.log(document.querySelector("#foo").firstElementChild)			//Pierwsze dziecko elementu "foo"

console.log(document.querySelector("#foo").children[Math.round(childrenLength / 2) - 1])	//Œrodkowe dziecko elementu "foo"

//Zadanie 2:

function addListener(element){							//listener
	element.addEventListener("click", () => {
		console.log(element.parentNode.innerText);		//pobranie i wyœwietlenie tekstu w konsoli
	})
}
addListener(document.querySelector("#ex2"));

//Zadanie 3:

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {				//funkcja dla ka¿dego button w div ex3
	element.addEventListener('click', (event) => {
		event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';	// ods³anianie lub ukrywanie elementu span
        });
    });

//Zadanie 4:

const changeParentColor = (elements) => elements.forEach(el => el.addEventListener("click", (e) => {			//dla ka¿dego rodzica przy klikniêciu przycisku
    e.target.parentElement.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);		//losowy kolor
	}))
changeParentColor(exButtons)

//Zadanie 5:

function changeFirstElem(){
	let squares = document.querySelector("#ex5").querySelectorAll("div");								//prostok¹t - szukanie
	
	let elementsToChange = document.querySelector("#ex5").querySelector("ul").querySelectorAll("li");	//szukanie elementu do zmiany background-koloru
	
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {													//najechanie myszk¹ na prostok¹t
			elementsToChange[0].style.backgroundColor = square.style.backgroundColor;					//zmiana koloru dla 1 elementu z listy
		});
	});
	
}

function changeLastElem(){
	let squares = document.querySelector("#ex5").querySelectorAll("div");								//prostok¹t - szukanie
	
	let elementsToChange = document.querySelector("#ex5").querySelector("ul").querySelectorAll("li");	//szukanie elementu do zmiany background-koloru
	
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {													//najechanie myszk¹ na prostok¹t
			elementsToChange[elementsToChange.length - 1].style.backgroundColor = square.style.backgroundColor;					//zmiana koloru dla ostatniego elementu z listy
		});
	});
}

function changeEvenElem(){
	let squares = document.querySelector("#ex5").querySelectorAll("div");								//prostok¹t - szukanie
	
	let elementsToChange = document.querySelector("#ex5").querySelector("ul").querySelectorAll("li");	//szukanie elementu do zmiany background-koloru
	
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {													//najechanie myszk¹ na prostok¹t
			for(let i = 0; i < elementsToChange.length - 1; i++){
				if((i + 1) % 2 === 0){
					elementsToChange[i].style.backgroundColor = square.style.backgroundColor;			//zmiana koloru	dla elementów parzystych
				}
			}
		});
	});
}

function changeOddNumber(){
	let squares = document.querySelector("#ex5").querySelectorAll("div");								//prostok¹t - szukanie
	
	let elementsToChange = document.querySelector("#ex5").querySelector("ul").querySelectorAll("li");	//szukanie elementu do zmiany background-koloru
	
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {													//najechanie myszk¹ na prostok¹t
			elementsToChange.forEach((element) => {
				element.style.backgroundColor = square.style.backgroundColor;							//zmiana koloru	dla wszystkich elementów
			});
		});
	});
}

function changeAllList(){
	let squares = document.querySelector("#ex5").querySelectorAll("div");								//prostok¹t - szukanie
	
	let list = document.querySelector("#ex5").querySelector("ul")										//szukanie listy do zmiany background-koloru
		
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {													//najechanie myszk¹ na prostok¹t
			list.style.backgroundColor = square.style.backgroundColor;;									//zmiana koloru dla ca³ej listy
		});
	});
}

//Zadanie 6:
const mainElem = document.querySelector("#ex6");
console.log(mainElem)

const elementOne = mainElem.firstElementChild.firstElementChild.firstElementChild;		
//pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko

const elementTwo = mainElem.firstElementChild.parentElement.firstElementChild.firstElementChild.nextSibling.parentElement;		
//pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic

const elementThree = mainElem.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;		
//rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko