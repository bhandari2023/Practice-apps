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


// if (uemail.length===0) {
//     console.log("array is empty");

// // }

// const emptObj ={}

// if(Object.keys(emptObj).length===0){
//     console.log("object is empty");
// }