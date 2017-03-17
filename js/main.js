/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 * 
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 * 
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

let developer = "Apps, Site";
let vormgever = "Site, Design";
let av =  "Audio, Visueel";
let acteur = "Toneel, Pdoium, Camera";
let game = "Unity, controller";

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;

let truth = true;
let lie = false;
let right = true;
let wrong = false;
let small = false;


/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
 */

let students = ['Shaif', 'Stijn', 'Yanick'];
let teachers = [true, false];
let age = [20, 18, 19];

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

let empty = [];
empty.push("Full");
console.log(empty);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
let names = ['Shaif', 'Stijn', 'Yanick'];
names.splice(0,2);
console.log(names);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
 */

let mobile = {merk:"Samsung", hoelang:2, memory:32};
let laptop = {merk:"MSI", hoelang:3, extra: "camera"};
let fiets = {onderdelen:"2 wielen", slot:"ketting"};
let oordoppen ={merk:"Skullcandy", hoelang:1, soort:"inear"};
let ov = {bedrijf:"NS", vorm:"rechthoek"};
let muis = {merk:"Trust", soort:"scangedoe", voor:"laptop"};
let laptoptas = {merk:"Targus", kleur:"Zwart", soort:"Schouder"};
let bril = {bedrijf:"Pearl", soort:"rechthoekachtig", kleur:"Donkerblauw"};
let websites = {naam:"Facebook", soort:"Social"};
let oplader = {merk:"Samsung", soort:"micro"};
console.log(mobile, laptop, fiets, oordoppen, ov, muis, laptoptas, bril, websites, oplader);
/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */

function Multiple(number1, number2){
    console.log(number1 * number2);
}
Multiple(5, 4);

function Division(number1, number2){
    console.log(number1 / number2);
}
Division(8, 4);

function Add(number1, number2){
    console.log(number1 + number2);
}
Add(5, 4);

function Min(number1, number2){
    console.log(number1 - number2);
}
Min(5, 4);

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */

function Information(firstName, lastName){
    let infor = {Firstname:firstName, Lastname:lastName};
    console.log(infor);
}
Information("Shaif", "Bhaggoe");

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

let student = function showName(){

};

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

let students = function showName


/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */
