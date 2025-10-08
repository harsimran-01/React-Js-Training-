/* console.log("Say Hii")
console.log("Welcome")

function step1(){
    console.log("Step 1 : Running")
}
function step2(){
    console.log("Step 2 : Running")
}
function step3(){
    console.log("Step 3 : Running")
}

step1()
step2()
step3()
 */



/* function longTask(){
    for(var i=1;i<1e5;i++){
        console.log(i)
    }
}
console.log("Start")
longTask()
console.log("End") */

//callback => function passed as an argument to another function
/* function greet(fullname){
    console.log(`fullname : ${fullname}`)
}
function processData(callback){
    var fullname = "admin"
    callback(fullname)
}
processData(greet) */


//anamounous function
// function processData(callback){
//     var fullname = "admin"
//     callback(fullname)
// }
// processData(function(fullname){
//     console.log(`fullname : ${fullname}`)
// })


//arrow function callback
/* function processData(callback){
    var fullname = "admin"
    callback(fullname)
}
processData((function)=>{
    console.log(`fullname : ${fullname}`)
}) */



//hold the callback -> timeout
// function sayHi(){
//     console.log("hi")
// }

// setTimeout(sayHi,2000)

// function sayHi()=>{
//     console.log("hi")
// }

//06-10-2025
{
    /* A promise in js is a way to handle asynchronous operations
3 states
pending-ongoing operation
fulfill-operation successful
reject-promise is rejected

creating and consuming promise with .then() and .catch()
 */
}

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("operation is successfull")
    } else {
        reject("something went wrong")
    }
});

myPromise.then(result => {
    console.log("Success:", result)
})
    .catch(error => {
        console.log("Error : ", error)
    });

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("5 second passes");
        }, 5000);
    });
}
asyncTask()
    .then(message => {
        console.log(message)
    })

//chaining promise

const loginUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("user logged in");
        resolve()
    }, 1000)
})
const getUserData = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("user data retrieved");
        resolve()
    }, 5000)
})
const showDataBoard = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("dashboard show");
        resolve()
    }, 2000)
})

loginUser.then(getUserData)
    .then(showDataBoard)

async function greet() {
    return "hello";
}
const result = await greet()
console.log(result)

// handle a real promise

// fakestoreapi
// jsonplaceholder.typicode
fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(data => console.log(data));


// console.log("fetching data")
// async function fetchData() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products/');
//         const data = await response.json();
//         console.log(data);

//     }
//     catch (error) {
//         console.error("Fetch Failed", error);
//     }
// }

// fetchData();

/* the useeffect hook allows you to perform side effects in components 
fetching data from FetchApi
direclty updating the DOM
timers  */
