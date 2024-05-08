// for of loop

//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5,6,7,8,9,10,11,"a","b"]

for (const i of arr) { // here bject means where to apply loop
   // console.log(i);
}

const greetings = "hello world"
for (const greet of greetings) {
//    console.log(` ${greet}`);
    
}

//Maps holds key value pair remembers original insertion values 

const map =new Map() // map is not iterable

map.set('IN','India');
map.set('FR','France');
map.set('EN','england');

for (const [key,value] of map) {
    //console.log(key, ":->", value);    
}

// const myObj={
//     'game1': 'nfs',
//     'game2':'fifa'
// }
// for (const [key,value] of myObj) {
//     console.log(key, ":->", value);    
// }
