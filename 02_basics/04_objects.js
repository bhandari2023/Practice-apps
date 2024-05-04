//const nuUser= new Object();

const nUser={};

nUser.iD= "123mnb"
nUser.eMail="pankajbhandari2010@gmail.com"
nUser.isLoggedIn=false

// console.log(nUser);

const regularUser={
    email:"bhandari@yahoo.com",
    fullname:{
        userFullName:{
            firstName:"himmat",
            lastName:"kumar"
        }
    }
}

//console.log(regularUser.fullname.userFullName.lastName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

const nUsers=[
    {
        id:1,
        eMailu:"ppp@gmail.com"
    },
    {
        id:1,
        eMailu:"ppp@gmail.com"
    },
    {
        id:1,
        eMailu:"ppp@gmail.com"
    },
    {
        id:1,
        eMailu:"ppp@gmail.com"
    }
]

// nUsers[1].eMailu
// console.log(nUser);
// console.log(Object.keys(nUser));
// console.log(Object.values(nUser));
// console.log(Object.entries(nUser));

// console.log(nUser.hasOwnProperty('isLoggedIn'));


//Object Deconstructing++++++++++++++++++

const course={
    courseName:"FSD",
    coursePrice:999,
    courseInstructer:"pankaj"
}

//course.courseInstructer;

const {courseInstructer:instructer}=course;

console.log(instructer);

