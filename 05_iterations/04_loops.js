const myObject ={
    js: 'javascript',
    cpp:'c++',
    ruby:'ruby on rails',
    swift: "swift by apple",
}

for (const key in myObject) {
    //console.log(`${key} is chortcut key for ${myObject[key]}`);
}

const programming = ["js","rb","py","c++","ruby"]
for (const key in programming) {
  //  console.log(programming[key]);
}


const map =new Map()

map.set('IN','India');
map.set('FR','France');
map.set('EN','england');

for (const key in map) {
   console.log(key); // map is non iterable so this loop will not work 
}