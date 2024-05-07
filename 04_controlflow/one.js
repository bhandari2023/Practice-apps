// // IF statement 


// const isUserloggedin= true;

// if (isUserloggedin) {
//     console.log("user logged in");
    
// }

// <,>,=,=<,>=, ==,=== , ! for negetive statements


// const score =200;

// if (score>100) {
//     const power = "fly";
//     console.log(`user power ${power}`);
//  }
//  console.log(`user power ${power}`);



// const balance =1000

// // if (balance > 50) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less then 500 ");
  
// }else if (balance< 750){
//     console.log("less than 750");
 
// }else if (balance <900){
//     console.log("less then 900");
// }else {
//     console.log("balance is less than 1200");
// }


const userLoggedIn= true
const userCreditCard= true
const loggedInFromGoogle= true
const loggedInFromEmail= false
if (userLoggedIn && userCreditCard && 2!=2) {// && all conditions should be true 
    console.log("Allow User ");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user Logged in ");
    
}