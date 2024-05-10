//reverse string usning split reverse and join 
// function reverseString() {
//     const str= "predator"
//     const rString= str.split('').reverse().join('')
//     console.log(`reversed string ${rString}`)
    
// }

// reverseString()

// function reverseString(str) {
//     let strRev="";
//     for(let i = str.length-1; i >= 0;i--){
//         strRev += str[i];
//     }
//     console.log(strRev);    
// }


// reverseString("hello");


// function to find the charter at the index of the given string 


let str = "Welcome to my website";
 
let index = 11;
 
let ctr = str.charAt(index);
 
console.log(`char at ${index} position is ${ctr}`);

//function to find the charter at the index of the given string  using square bracket notation

let str2 ="welcome to my website ";
let index2 =12;
let ctr2 = str2[index2];
console.log(`char at ${index2} position is ${ctr2}`);


//function to find the charter at the index of the given string using slice

let str3 ="welcome to my website ";

let index3=14;

let ctr3= str3.slice(index3, index3 + 1);
console.log(ctr3);


//function to remove a charcter from an array 

function removeCharacter() {
    originalString = "Welcome to my website";
    newString = originalString.replace("", "**");
    console.log(newString);
}

removeCharacter();


//function to remove a charcter from an array  using split and join 

function removeChar2(){
    newString1= "welcome to my website ";
    newString2= newString1.split("w").join("W")
    console.log(newString2);
}
removeChar2()


// function to reverse a string using Split and reduce

function reverseString(str){
    const reversedString= str.split("").reduce((acc,char)=>char + acc,"")
    console.log(reversedString);

}

reverseString("pankajBhandari")

reverseString("pankaj Bhandari")


// function to reverse a string using Split and reverse and join

function reverseString3(str){
    const resString= str.split("").reverse().join("");

    console.log(resString);
}
reverseString3("bhandari ji")

// function to reverse a string using Spread and reverse and join
function reverseString4(str){
    const resString= [...str].reverse().join("")

    console.log(resString);
}
reverseString4("manyata")


// function to reverse a string using Arrayform and reverse and join

function reverseString5(str) {
    const resString= Array.from(str).reverse().join("")
    console.log(resString);
    
}
reverseString5("Bhumika")

// function to check if the given string is palindrome or not 

function pallinString(str) {
    const reverseString = str.split("").reverse().join("");
    return str ===reverseString;
    
}
console.log(pallinString("nitin"));

// find maximum element in an Array

function maxNumber(arr) {

    return Math.max(...arr)
}

console.log(maxNumber([1,2,3,4,5,6,7]));

// find minimum element in an Array 
function minNumber(arr2){
    return Math.min(...arr2)
}
console.log(minNumber([5,6,7,6,8,9]));

//find Factorial of a number

function factorial(n) {
    if(n===0||n===1){
        return 1;
    } else{
        return n * factorial(n-1);
    }
    
}

console.log(factorial(6));

function reverseWord(str){
    const stringWord= ''
    for (let i = stringWord.length-1; i >= 0; i--){
        stringWord += str[i]
    }
    return stringWord;
}
const inputString = "Pankaj"
console.log(reverseWord(inputString))