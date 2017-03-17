/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
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
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
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
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
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
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
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
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
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
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

//De array
let studentName = ['Shaif', 'Yanick', 'Stijn', 'Amin', 'Victor', 'Coen', 'Floris', 'Ramy', 'Karahan', 'Chris'];

//De for loop. Het checkt de lengte van studentName door .lenght
for(let i = 0; i < studentName.length; i++){
    console.log(studentName[i]);
}

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */
let firstName = 'Shaif';
let lastName = 'Bhaggoe';

let fullName = firstName + lastName;
console.log(fullName);

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

// Math.floor rond het af    Math.random tussen 0 & 5
console.log(Math.floor(Math.random() * 6));
//Math.random tyssen 1 en 10
console.log(Math.floor(Math.random() * 11) + 1);
//Math.random tussen 30 & 40
console.log(Math.floor(Math.random() * 41) + 30);
//Math.random tussen 100 & -100
console.log(Math.floor(Math.random() * 101) - 101);

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });
console.log('Primitive');
console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });
console.log('array');
console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });
console.log('Object');
console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });
console.log('Object')
console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
            { array : false, object : false, primitive : false });
console.log('Object');

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */
let name = "Shaif";
let last = "Bhaggoe";
let againage = 20;
let work = "none";

const newname = "Shaif";
const newlast = "Bhaggoe";
const newage = 20;
const newwork= "none";

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'Wanneer je de value later zou willen veranderen');

console.log('Wanneer gebruik je de const keyword', 'Wanneer je de value zo wilt laten en wilt voorkomen dat het verandert wordt');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

let info = {Name: "Shaif", Age: 20, Lengte: 192, Family: ["Random1", "Randam2", "Random3", "Random4"]};
console.log(info);

