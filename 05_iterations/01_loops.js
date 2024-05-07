//FOR LOOP

for (let i = 0; i < 20; i++) {
    const element = i;
    if (i==10) {
        //console.log("this is number 10");
    } 
   //console.log(element);
}

for(let i=1; i<=10;i++){
    //console.log(`outer Loop Value ${i}`);

    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value ${j} outer loop ${i}`);     
      // console.log(i + ' times ' + j +'= ' + i*j);
        
    }
}

let myArray=["flash", "superman","batman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


//break and continue 

// for (let index = 1; index <= 20; index++) {
//        if (index==5) {
//         console.log("no 5 detected");
//         break;
//        }

//     console.log(`value is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index==5) {
     console.log("no 5 detected");
     continue // skips the condition 1 time 
    }

 console.log(`value is ${index}`);
 
}