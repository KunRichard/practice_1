//WEBOLDALI KOD
const arrow = document.getElementById("js-forward");
arrow.onclick = function () {
  document.getElementById("js-films").scrollLeft += 800;
};

const arrow2 = document.getElementById("js-backward");
arrow2.onclick = function () {
  document.getElementById("js-films").scrollLeft -= 800;
};
//WEBOLDALI KOD

//GYAKORLÁS!!!!!!!!!!!!!!!!!!!!!!!!!!!!GYAKORLÁS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!GYAKORLÁS!!!!!!!!!!!!!!!!!!!!!GYAKORLÁS!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!VÁLTOZÓK LET VAR CONST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let fiok;
fiok = "10 000 ft";
//Előszőr deklarál de később kapott értéket ellenben
//a második példa deklarációt és értéket kapott egyszerre!!!

let másodikfiok = "20 000FT";
// deklaráció változóKulcs Érték!!!

let deklaraltÉsDefinialt = "5";
let deklaraltDeCsakKésöbbDefinialt;
deklaraltDeCsakKésöbbDefinialt = deklaraltÉsDefinialt ** 2;
let deklaraltDeNemDefinialt;
console.log(
  deklaraltÉsDefinialt,
  deklaraltDeCsakKésöbbDefinialt,
  deklaraltDeNemDefinialt
);
//DEKLARÁCIÓK KÖZÖTTI "KÜLÖNBSÉG"!!!

const PI = "3.14";
//A CONST ÉRTÉKE NEM VÁLTOZTATHATÓ MEG KÉSÖBB ELLENBEN A VAR ÉS A LET ÉRTÉKE IGEN!!!
//MIVEL NEM VÁLTOZÓ ÉRTÉK LÉTREHOZÁSUK SORÁN EGYBŐL ÉRTÉKET KELL NEKI ADNUNK!!

//BLOKK (Bárhol létrehozható) JELE: {} !!!
{
  let doboz = "3";
  console.log(doboz);
}
//BLOKKON BELÜL LÁTHATÓ A VÁLTOZÓ!!!
{
  let belsődoboz = "6";
}
console.log(
  "belsődoboz ERROR-T DOB MIVEL A BLOKKON KÍVÜL HIVATKOZTAM A VÁLTOZÓRA!!!"
);
//ERROR-T DOB MIVEL A BLOKKON KÍVÜL HIVATKOZTAM A VÁLTOZÓRA!!!

//GLOBÁLIS SCOPE
const globalisValtozo = true;
let masodikGlobalisValtozo = false;
console.log(
  document.location.href,
  document.location.host,
  screen.width,
  globalisValtozo,
  masodikGlobalisValtozo
);

//FÜGGVÉNYEN(FUNCTION) BELÜL LÁTHATÓ VÁLTOZÓK (var)
var globalisDoboz = 2;
function scope() {
  var fuggvenyenBeluliDoboz = 1;
  console.log(globalisDoboz);
}

{
  var globálisDoboz = true;
}
console.log(globálisDoboz);

//ELŐSZÖR LÉTRE HOZZUK A VÁLTOZÓT MAJD MUVELETEKET HAJTUNK VÉGRE VELE.(LEHET VESSZŐVEL ELVALASZTANI, DE ADHATUNK NEKI KÉSÖBB IS ÉRTÉKET!!)
let nev = "Ricsi",
  website = "kunricsi.hu";
console.log(nev, website);
//TOVÁBBI MŰVELETEK...

//VÁLTOZÓKAT HOZUNK LÉTRE ÍGY ELKERÜLVE A "DRY"-T
let tizesSzamRendszer = Number.parseInt("FF", 16);
let TizenhatosSzamRendszer = "FF";
console.log(
  TizenhatosSzamRendszer + " in Tizes Érték:",
  tizesSzamRendszer,
  "\n" + TizenhatosSzamRendszer + " in Kettes Érték:",
  tizesSzamRendszer.toString(2)
);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TÖMBÖK ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TÖMBÖK ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let days = [
  "hétfő",
  "kedd",
  "szerda",
  "csütörtök",
  "péntek",
  "szombat",
  "vasárnap",
];
console.log(days);

let storage = [1, "szerda", true];
console.log(storage);

//EGY ARREY-EN BELÜL 0-TÓL INDUL AZ INDEX A [0] INDEX A TÖMB 1. ELEME, HA KI INDEXELÜNK UNDEFINED ÉRTÉKET KAPUNK!!
console.log(days[0]);
console.log(days.length);
console.log(days[days.length - 1]);

//VÉGÉRE PUSHOLJA
days.push("Vége a hétnek!");
console.log(days);

//ELEJÉRE RAKJA
days.unshift("Kezdődik a hét!");
console.log(days);

//A POP KIVESZI A TÖMB UTOLSÓ ELEMÉT ÉS VISSZATÉRÉSI ÉRTÉK KÉNT VISSZA ADJA AZT!!!
let element = days.pop();
console.log(element, days);

//A SHIFT KIVESZI A TÖMB ELSŐ ELEMÉT ÉS VISSZATÉRÉSI ÉRTÉK KÉNT VISSZA ADJA AZT!!!
let element2 = days.shift();
console.log(element2, days);

//DELETE KULCSSZÓVAL TÖRÖLNI LEHET ÉRTÉKE UNDEFINED-DÉ (EMPTY) VÁLTOZIK!!!
delete days[2];
console.log(days);

//HOZZÁ IS ADHATUNK ÉRTÉKEKET!!!!!!
days[2] = "szerda";
days[9] = "bárhova lehet";
console.log(days);

//STRING TÍPUS IS TUD ARREY KENT VISELKEDNI!!!
const szöveg = "Hello";
console.log(szöveg[1], szöveg[4], szöveg[5]);

//A SILENCE MŰVELET (FELSZELETELÉSE EGY ARREYNAK)!!
console.log(days.slice(1)); //AZT INDEXELJÜK AHONNAN MÁR LÁTNI AKARJUK ITT AZ 1-ES INDEXŰ ELEMET MÁR LÁTJUK
console.log(days.slice(9)); //ITT A 9-ES INDEXŰ ELEMET MÁR LÁTJUK

//MÁSOLAT (HOZZÁADHATUN, ÁTÍRHATUNK STB..)
let daysCopy = days.slice(0);
daysCopy[0] = "Ez egy módosított másolat";
daysCopy.unshift(1);
daysCopy.unshift(2);
console.log(days);
console.log(daysCopy);

//A SZELET VÉGÉT IS MEGADHATJUK EGY SZELETET VESZÜNK KI A TÖMBBŐL!!!
console.log(days.slice(0, 4)); //A 0. INDEXŰ ELEMET MÁR LÁTNI AKAROM A 4. INDEXŰT VISZONT MÁR NEM AKAROM LÁTNI!!
console.log(days.slice(3, 4)); //A 3. INDEXŰ ELEMET MÁR LÁTNI AKAROM A 4. INDEXŰT VISZONT MÁR NEM AKAROM LÁTNI!!
//----Phyton nyelvben :-al indexelünk pl.: days.slice[1:5]----

//!!!!!!!!!!!!!!!!!!!!!!!OBJEKT TÍPUS(ASSZOCIATÍV TÖMB)!!!!!!!!!!!!!!!!OBJEK TÍPUS!!!!!!!!!!!!!!OBJEKT TÍPUS!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//KULCSOK ÉS ÉRTÉKEK VANNAK EGY OBJEKT-BAN KULCSOK(STRING ÉS SYMBOL TÍPUSUAK)!!!!!!!
//JELE: {}
let author = {
  name: null,
  weboldal: "www.barneystudio.hu",
  age: 24,
};
console.table(author); //EGY TÁBLÁZATBA LOGOLJA KI
console.log(author); //SIMÁN KILOGOLJA LENYÍLÓ FÜLLEL LEHET "KIBONTANI" AZ OBJEKTUMOT

//AZ OBJEKTUM TAGJAIRA . -AL ÉS A []-EL HIVATKOZHATUNK
console.log(author.name);
author.name = "Ricsi"; //HOZZÁFÉRÜNK ÉS ÉRTÉKET MÓDOSÍTHATUNK!!
console.log(author.name, author.weboldal, author.age);

//TÖRÖLHETŐ EGY OBJEKTUM TAGJA A DELETE-VEL (UNDEFINEDDÉ VÁLTOZIK)
delete author.age;
console.log(author.age);

//HA VÁLTOZÓBAN VAN AZ OBJEKTUM KULCSA
let key = "weboldal";
console.log(author[key]);

const kulcs = 1;
const utca = {};
utca[kulcs] = "ház";
console.log(utca);

let o = {};
console.log(o.name); //UNDEFINED MIVEL O OBJEKTUMON BELÜL NINCS MEGADVA NAME ÉRTÉK, HA TÖRLÜNK EGY ÉRTÉKET DELETE OPERATORRAL AKKOR IS UNDEFINED LESZ!!

//OBJEKTUMON BELÜL IS LÉTREHOZHATUNK OBJEKTUMOT!!
let auto = { rendszám: "LFG-096" };
let garázs = {
  Típus: "furgon",
  Össztömeg: 3500,
  parkolóhely: auto,
};
garázs.tulaj = {név:"Kun Richárd"};//HOZZÁ ADHATOM AZ OBJEKTUMHOZ UTÓLAG IS
console.log(garázs);


//GYAKORLAT//GYAKORLAT//
let lottóhúzás = {
  időpont:"2023.12.21. 00:00",
  főnyeremény: "2000000000$",
  nyerőszámok:[23, 11, 67, 44, 22]
};
console.log(lottóhúzás);

let ticket = {
  from: {
  airport: 'Budapest',
  date: '2024-08-11',
  time: '09:40'
  },
  to: {
  airport: 'Zakinthos',
  date: '2024-08-21',
  time: '11:25'
  },
  name: 'Kun Richárd',
  passport: '123456XY'
  }
  console.log(ticket.from.date, ticket.from.time, ticket.to.date, ticket.to.time);
  console.log("név: "+ticket.name, "Útlevél: "+ticket.passport);
  console.log("Célállomás: "+ ticket.to.airport);

  //VÉGTELEN HA NINCS A LEAF VÉGE AZ OBJEKTUM FOLYAMATOSAN SAJÁT MAGÁRA HIVATKOZIK!!
  let three = {leaf:"fruit"};
  three.three = three;
  console.log(three.leaf);
  console.log(three.three.leaf);

  let safe = { "123456": "$10.000" };
  console.log(safe[123456]);

  let szám1 = 5;
  let objektum = {};
  objektum[szám1] = true;
  console.log(objektum, objektum[5], objektum["5"]);

  let szöveg1 = "5";
  let objektum1 = {};
  objektum1[szöveg1] = false;
  console.log(objektum1, objektum1[5], objektum1["5"]); 

  let arr = [1, 5, 3, 1];
  let map = {};
  map[arr[0]] = true;
  map[arr[1]] = true;
  map[arr[2]] = true;
  map[arr[3]] = true;
  console.table( map );

  let arr1 = [1, 5, 3, 1];
  let map1 = {};
  map1[arr1[0]] = 0;
  map1[arr1[1]] = 1;
  map1[arr1[2]] = 2;
  map1[arr1[3]] = 3;
  console.table( map1 );

  //!!!!!!!!!!!!FÜGGVÉNYEK FUNCTION!!!!!!!!FÜGGVÉNYEK FUNCTION!!!!!!!!!!!!!!!!!!FÜGGVÉNYEK FUNCTION!!!!!!!!!!!!!!!!!
  function add(a, b){
    return a + b;
  }

  let subtract = function( a, b ) {
    return a - b;
    }
    