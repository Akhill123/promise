//set timeout method
// console.log("hello1")
// setTimeout(function() {
// console.log("hello2")
// },2000)
// console.log("hello3")

//promise
// let promise = new Promise(function(resolve, reject){
// console.log("hello1")
// resolve(100)
// })
// setTimeout(function() {
// console.log("hello2")
// },2000)
// console.log(promise)
// console.log("hello3")

//
let prom1 = new Promise(function(resolve, reject)
{
console.log("hey am selected")
resolve(true)
})
console.log(prom1)
let prom2 = new Promise(function(resolve, reject)
{
console.log(" hey am rejected")
reject(new error("hey am error"))
})
console.log(prom2)

prom1.then((value) => {
console.log(value)
})
prom2.catch((error)=>
{
    console.log("some error accured")
})