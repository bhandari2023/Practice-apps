const myArray=[1,2,3,4,5,6,7,'a','b']

const heroArrays=['He-man','super-man','doga', 'bankelaal']


const myArr2= new Array(1,2,3,4,5,6)

console.log(myArray[2]);
console.log(heroArrays[2]);
console.log(myArr2[2]);


//Array Methods ++++++++++++++++++++++++++++


myArray.push(6); // add value in the end of the array
myArray.push('Pankaj');
console.log(myArray);
myArray.pop();//removes last element from the array
console.log(myArray);

myArray.unshift(9);// addays value to the start of the array not recommended always
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

//slice/Splice

