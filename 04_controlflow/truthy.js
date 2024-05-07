const uemail= []

if (uemail) { // empty uemail will be considered false empty [] array gives true 
    console.log("user logged in");
    
} else {
    console.log("enter valid email id ");
}

// falsy values 
//false,0,-1,bigInt 0n,"",null,undefined, NaN

//truthy values if they are added in string 
//"0" inside string, 'false', "", [],{}, function(){}


if (uemail.length===0) {
    console.log("array is empty");

 }

const emptObj ={
    name:"pankaj"
}

if(Object.keys(emptObj).length===0){
    console.log("object is empty");
}else{
    console.log("object is not empty "+ `${emptObj.name}`);
}

//nullish coalescing opertaor for null and undefined 

let val1;
//val1 =5 ?? 10;
//val1 = null ?? 10 ; //returns 10

//val1= undefined ?? 10 //returns 10

val1 = null ?? 10 ?? 20 //returns 10

console.log(val1);


//Ternary Operator++++++++++++++++++++++++++++

const iceTeaprice = 100

iceTeaprice<=80 ? console.log("less then 80") : console.log("more than 80");