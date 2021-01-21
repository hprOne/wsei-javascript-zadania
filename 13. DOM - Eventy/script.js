//Zadanie 1:

document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));				//Klikni�cie w przycisk o id="test-event"

document.addEventListener('mousemove', (event) => console.log(event));										//Ruch myszk� na ekranie

document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));			//Najechanie myszk� na przycisk o id="test-event"

document.addEventListener('keypress', (event) => console.log(event));										//Naci�ni�cie klawisza na klawiaturze

document.addEventListener('scroll', (event) => console.log(event));											//Scrollowanie strony w d� i w g�r�

document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));			//Zmian� tekstu w input id="input-test"

//Zadanie 2:

const ex2 = document.querySelector('#ex2');		//button ex2
ex2.addEventListener('click', (x) => {			//wychwytywanie klikni�cia
	const { target } = x;
	const span = target.nextElementSibling;
	span.innerText = target.dataset.text;		//postawienie tekstu do spanu
});

//Zadanie 3:

document.querySelector('#ex3').addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'blue');		//zmiana koloru na niebieski przy najechaniu kursorem
document.querySelector('#ex3').addEventListener('mouseout', (event) => event.target.style.backgroundColor = 'red');			//zmiana powrotna na czerwony po opuszczeniu kwadratu

//Zadanie 4:

const errorSpan = document.querySelector("#ex3-err");                       //komunikat pod inputem
document.querySelector("#input-test").addEventListener("input", e => {      //listener input - co wpisuje u�ytkownik
    const input = e.target.value;
    var regex = /[0-9]/                                                     //regex cyfry 0-9
    let text = "";

    if(regex.test(input)){                                                  //je�li wykryje cyfry 0-9
        text = "Nie mozna wpisywac liczb";                                  //b��d
    } else {
        text = "";
    }
    errorSpan.innerHTML = text;                                             //komunikat pod inputem z tekstem w/w
})

//Zadanie 5:

const ex5Span = document.querySelector('#ex5 sppan');                   //sta�a ex5Span
const ex5Button = document.querySelector('#ex5-button');                //sta�a przycisku ex5button
let x = 0;                                                            //ilo�c klikni�� przycisku
ex5Button.innerText = x;
const counter = (e) => {
	x++;
	e.target.innerText = x;
	if (x === 10) {                                                   //licznik r�wny 10
		ex5Button.removeEventListener('click', counter);                //usuni�cie eventu
	}
};

//Zadanie 6:

var body = document.getElementsByTagName("body")[0];        //element body
document.addEventListener("scroll", (e) => {
    if(window.scrollY >= 200)                   //je�li zjazd w d� poni�ej 200px
        body.style.backgroundColor = "red";     //czerwony
    else 
      body.style.backgroundColor = "white";     //bia�y
});

//Zadanie 7:

/* NIE ROZWI�ZANE */