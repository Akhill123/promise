let mobile="Redmi10S"
let mob1='iphone'
console.log(mobile,mobile.length,typeof mobile,mob1)


// //we can make string in 3ways
// let friend1="akshay"
// let friend2='adarsh'
// let friend3=`ajnd"akljal"fdh'akhill'hghgd`
// console.log(friend1,friend2,friend3)


let friend1="akshay"
let friend2='adarsh'
let friend3=`${friend1} is a friend of ${friend2}`//to assign identifier of one string to another string
let girlfriend=`anjali is a "girl" so 'you are my' friend of friend`
console.log(friend3,girlfriend)

//escape sequence charecters(\)
let fruit= "man\ngooo"//{" "} or {''} \n (the words after n will move to next line in string)
console.log(fruit)
let fruit1='bana\'na'
console.log(fruit1)
 
let stng="akhill,abcd,akkjkf"
console.log(stng.slice(0,6))
console.log(stng.replace("akhill","akhileshk"))//to replace an element in a string 




let cars =["Saab", "Volvo", "BMW"]
let bike=["pulser","apache","mt15"]
let carsandbike= cars.concat(bike)//to combine 2 strings
console.log(carsandbike)
cars[0]="audi" //to replace the element of cars string in 0th index
console.log(cars[0],cars.length)
console.log(cars.toString())// ,output

