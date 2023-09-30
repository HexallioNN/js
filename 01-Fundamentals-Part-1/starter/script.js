/*
let js = "amazing"
console.log(40 + 8 + 23 - 10);
console.log("Jonas")
console.log(23); 

let firstName = "Jonas"
console.log(firstName);

let country = "Turkey";
let continent = "Europe"
let population = 84
console.log(country);
console.log(continent);
console.log(population);

let javasciptIsFun = true;
console.log(javasciptIsFun);

console.log(typeof true);
console.log(typeof javasciptIsFun);
console.log(typeof 23);
console.log(typeof "İlter");

javasciptIsFun = "YES!";
console.log(typeof javasciptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

const now = 2037
const ageIlter = now - 2006;
const ageSarah = now -2020;
console.log(ageIlter, ageSarah);

console.log(ageIlter * 2, ageIlter / 2, 2 ** 3);

const firstName = "İlter";
const lastName = "Kılıç";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; 
x *= 4;
x++;
x--;
x--;
console.log(x);

const now = 2037
const ageIlter = now - 2006;
const ageSarah = now -2020;
console.log(ageIlter, ageSarah);

let x, y;
x = y = 25-10-5;
console.log(x, y);

const averageAge = (ageIlter + ageSarah) / 2;
console.log(ageIlter, ageSarah, averageAge)


const markWeight = 95;
const markHeight = 1.88
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log("String with \n\
multiple \n\
lines")

console.log(`String
multiple
lines`);


const name = "Sarah";
const age = 15;
if(age >= 18){
    console.log(`${name} can start driving license 🚗`);
} else{
    console.log(`${name} can start driving license in ${18 - age} years`);
}

let century;
const birthYear = 1991;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);


const markWeight = 95;
const markHeight = 1.88
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}!)`);    
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

//type conversion
const inputYear = `1991`;
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("İlter"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log(`I am ${23} years old`);
console.log(`23` - `10` - 30);

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`İlter`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 0;
if(money){
    console.log(`Don't spend it all :)`);
} else {
    console.log(`You should get a job`);
}

let height;
if(height){
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}