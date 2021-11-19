// console.log('Test');
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all
of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
    oberwise:"Chocolate",
    dunkin:"Vanilla",
    culvers:"All of them",
    mcDonalds:"Sham-rock-shake",
    cupids_candies:"Chocolate Malt"
    }]
   } 


   for (let food in person3){
    console.log(`${person3[food]}`)
    console.log(`${person3.shakes[values]}`) 
};
   

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/
// Create our Person Prototype (Person class)
// create the printInfo method
// Create another method for the addAge method


console.clear()

class Person {
    constructor(name, age){
    this.name = name
    this.age = age
}
    printInfo(){
        console.log(`He is ${this.name} and is ${this.age} years old`)
    }
    bDay(){
        console.log(`It is ${this.name}'s birthday today`)
        this.age ++
        console.log(`${this.name}'s new age is ${this.age}`)
    }
}

const johnStewart = new Person('John', 25);
const stewartJones = new Person('Stewart', 22)

console.log(johnStewart);
console.log(stewartJones);

console.log(johnStewart.printInfo()); 
console.log(stewartJones.printInfo());

console.log(johnStewart.bDay());



//=======Exercise #3=========//
/*Write a function that takes in an array and removes every even index
with a splice,
and replaces it with the string "even index" */
function replaceEvens(arr){
     //code goes here
    console.log(arr)
    for (let i = 0; i+=2; i<arr.length){ 
    arr.splice(i, 1, 'even index')}
    console.log(arr)

}
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even
//index","Rodger"