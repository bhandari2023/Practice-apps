const marvelHeroes=['thor','hulk','racoon']

const dcHeroes=['superman','flash','batman']        

const rjHeroes=['naagraaj','doga','dhruv']
//marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);


// const allHeroes= marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const allnewHeores=[...marvelHeroes,...dcHeroes,...rjHeroes];

//console.log(allnewHeores);

const newExample=[1,2,3,['a','b','c'],4,6,['A',9,'B','c']]

const flatExample=newExample.flat(Infinity)
//console.log(flatExample);


const name1= "pankaj"

//console.log(Array.isArray(name1));

const newArr1=Array.from(name1)
//console.log(newArr1);

//console.log(Array.isArray(newArr1));

const newArr2=Array.from({name:name1})//important
console.log(newArr2)

let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) //make array from declared variables 
