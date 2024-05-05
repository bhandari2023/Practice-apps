function sumOfTwoNumber(num1,num2)
{ 
    // let result= num1 + num2;
    // return result;
    return num1+num2

}

const result=sumOfTwoNumber(1,3);

//console.log("result:",result);

//++++++++++++++++++++++++++++++++++++++
function productTwoNum (num1,num2){

    return num1*num2;
}

const result2=productTwoNum(2,4);
//console.log(result2);


function userLoggedIn(username){
    if (!username) {   
        console.log("enter user name ");
        return
    } else{ return `${username} just logged in`
}
}

console.log(userLoggedIn("pankaj")); 

function calculateCartPrice(...num1){// use... operator to take infinite argument for adding shopping cart list 

return num1;
}

console.log(calculateCartPrice(100,200,300));

const user12={
    username:"pankaj",
    price: 200,
}

function handleObject(anyuser){

    console.log(`username is ${anyuser.username} and price is ${anyuser.price}`);

}

handleObject(user12); // handle object by defining new Object User12
handleObject({// handle object directly
    username:"deepa",
    price: 199
})

const nuArray= [100,200,300,400]

function arrayReturn(getArray) {
    return getArray[3]
    
}

console.log(arrayReturn(nuArray));
console.log(arrayReturn([1,2,3,4,5,6,7]));