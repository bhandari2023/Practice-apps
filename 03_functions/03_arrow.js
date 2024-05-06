const user ={
    userName: "pankaj",
    userPrice: "999",

    welcomeMessage:  function(){
        console.log(`${this.userName},  welcome to our website `);

        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName="bhandari Ji"

//  user.welcomeMessage();
//  console.log(this);


// function arrowFunction() {
//     let username="parua"
//     console.log(this.username);
    
// }
// arrowFunction()

// const chai1= function(){
//     let username1="pankajJi"
//     console.log(this);
    
// }
// chai1()
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// different ways to write an arrow function 
// const chai1= () => {
//     let username1="pankajJi"
//     console.log(this.username1);
    
// }
// chai1()


// const addTwo = (num1,num2)=>{ 
//     return num1+num2; // explicit return 

// }
//const addTwo =(num1,num2)=> num1+num2 no need of curly braces if written in single line 


//const addTwo =(num1,num2)=> (num1+num2) // return is not necessary when using () brackets  also known as implicit return 

const addTwo =(num1,num2)=> ({username: "pankaj"})// to return object it should be wrapped in parenthesis 

console.log(addTwo(2,5));

// example 
const myArray=[2,3,4,5,6,7]

myArray.forEach(()=>{

})

