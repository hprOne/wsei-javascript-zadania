//Zadanie 1:

var listClassElem = document.getElementsByClassName("list");        //zmienna ListClassElem
console.log(listClassElem)                                          //wy�wietlenie w konsoli

//Zadanie 2:

const getElemByTag = (tagName) => document.getElementsByTagName(tagName);   //funkcja szukanie tag�w
const listTagElem = getElemByTag("li")                                      //szukanie tag�w i zapisanie do zmiennej
console.log(listTagElem)                                                    //wy�wietlenie w konsoli

//Zadanie 3:

const list = document.querySelector("#list")                            //szukanie elementu listy i zapisanie do zmiennej

//Zadanie 4:

var listClassElem = document.getElementsByClassName("list");                //zmienna ListClassElem
const getElemByTag = (tagName) => document.getElementsByTagName(tagName);   //funkcja szukanie tag�w
var listTagLi = getElemByTag("li");
var listTagUl = getElemByTag("ul");
var listSpans = getElemByTag("span");
var spanElemInSpans = document.getElementById("spans").getElementsByTagName("span");

function writeResult(li, ul, spans, classLi,spansInSpans) {
    console.log("Elementy li: ", li);
    console.log("Elementy ul: ", ul);
    console.log("Spany: ", spans);
    console.log("Spany z klas� li: ", classLi);
    console.log("Spany z id=spans: ", spansInSpans);
}
writeResult(listTagLi, listTagUl, listSpans, listClassElem, spanElemInSpans);       //wynik