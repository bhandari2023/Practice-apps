//singleton unique object no multiple instances 



//objects literals 
const mySym= Symbol("key1");

const neuUser={
    fName:"pankaj",
    sName:"bhandari",
    "full name" : "pankaj Bhandari",
    [mySym]:"myKey1",
    eMail:"pankajbhandari2010@gmail.com",
    location: "india",
    phNo: 9950143673,
    isLoggedin: false,
    lastLogin: ["mon","tue","wed","thurs"]

};


// console.log(neuUser.eMail)
// console.log(neuUser["eMail"])

// console.log(neuUser["full name"])

// console.log(neuUser[mySym]);

// neuUser.eMail="pankaj.com";
// console.log(neuUser.eMail);

//Object.freeze(neuUser)

// neuUser.eMail="BhandariJi.com"

//console.log(neuUser);

neuUser.greeting= function  (){
    console.log("Hello Js User");
}

neuUser.greeting2= function(){
    console.log(`Hello Js User-${this.fName}`);
}

console.log(neuUser.greeting());

console.log(neuUser.greeting2());