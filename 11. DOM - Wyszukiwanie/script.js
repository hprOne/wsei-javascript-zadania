//Zadanie 1:

var listClassElem = document.getElementsByClassName("list");        //zmienna ListClassElem
console.log(listClassElem)                                          //wyœwietlenie w konsoli

//Zadanie 2:

const getElemByTag = (tagName) => document.getElementsByTagName(tagName);   //funkcja szukanie tagów
const listTagElem = getElemByTag("li")                                      //szukanie tagów i zapisanie do zmiennej
console.log(listTagElem)                                                    //wyœwietlenie w konsoli

//Zadanie 3:

const list = document.querySelector("#list")                            //szukanie elementu listy i zapisanie do zmiennej

//Zadanie 4:

var listClassElem = document.getElementsByClassName("list");                //zmienna ListClassElem
const getElemByTag = (tagName) => document.getElementsByTagName(tagName);   //funkcja szukanie tagów
var listTagLi = getElemByTag("li");
var listTagUl = getElemByTag("ul");
var listSpans = getElemByTag("span");
var spanElemInSpans = document.getElementById("spans").getElementsByTagName("span");

function writeResult(li, ul, spans, classLi,spansInSpans) {
    console.log("Elementy li: ", li);
    console.log("Elementy ul: ", ul);
    console.log("Spany: ", spans);
    console.log("Spany z klas¹ li: ", classLi);
    console.log("Spany z id=spans: ", spansInSpans);
}
writeResult(listTagLi, listTagUl, listSpans, listClassElem, spanElemInSpans);       //wynik