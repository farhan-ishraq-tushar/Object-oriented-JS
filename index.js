// Oject Creation 1:  Object writing using object literal
 let person =  {
    first_name:"Farhan", // here, 'first_name' is key and 'Farhan' is key value. 
    last_name: "Ishraq",
    age: 34,
    city: "Savar",
    isBangladeshi: true,
    getName:()=>{
        return (`My full name is ${person.first_name} ${person.last_name}`)
    }
 }
 /*
 console.log(person)
 // Output:
 {
  first_name: 'Farhan',
  last_name: 'Ishraq',
  age: 34,
  city: 'Savar',
  isBangladeshi: true,
  getName: [Function: getName]
}

--------------------------------------------------
console.log(person.getName()) // Output: My full name is Farhan Ishraq
*/





// -----------------------------------------------------------------------------
 // Oject Creation 2: Object by creating instance of object
 let personOne = new Object(); // keyword 'new' is not mandatory.
 personOne.firstName = "Farhan" 
 // Here, 'personOne' is an object; firstName is its key & 'Farhan' is its value

 personOne.lastName =  "Ishraq"
 personOne.age = 1000
 personOne.city = "Atlanta"
 personOne.isAtlantian = true
personOne.getName = ()=>{
    return `My name is ${personOne.firstName} ${personOne.lastName}`
}



// -------------------------------------------------------------------------------
// Oject Creation 3: Object creation by using an object constructor
/*
    In object constructor we use function to create an object
*/
function myPerson(){
    this.firstName="Farhan" // 'this' is indicating the function person()
    this.lastName="Ishraq"
    this.age=34
    this.city="Dhaka"
    this.isBangladeshi=true

    this.getName=()=>{
        return `My name is ${this.firstName} ${this.lastName}`
    }
}
/*
    We can not use this object by just calling this function. We have to first 
    create an instance of the object to use the object
*/

// Instance creation
let personInstance = new myPerson(); // we can skip 'new' keyword part. It is optional.
/*
console.log(personInstance)
// Output: 
    myPerson {
        firstName: 'Farhan',
        lastName: 'Ishraq',
        age: 34,
        city: 'Dhaka',
        isBangladeshi: true,
        getName: [Function (anonymous)]
-----------------------------------------------------------

console.log(personInstance.firstName) //Output: Farhan
}
*/
