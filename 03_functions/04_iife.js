// Immidiately Invoked function expression (IIFE) to avoid golbal scope pollution we can use IIFE

(function goldy1(){// named iife
    console.log("db Connected")
})();// semicolon is used to end the function  when using 2 iife's


((name)=>{ // unnamed iife
    console.log(`DB COnnected ${name}`);
})('pankaj')
