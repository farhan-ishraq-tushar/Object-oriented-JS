// Class declaration process
class person{
    firstName = 'Farhan' // we can't use 'let' or 'var' before variable
    lastName = 'Ishraq'
    age = 10000
    isMartian = false
    city='Dhaka'

    getName(){
        return `My name is ${this.firstName} ${this.lastName}`
    }
}

// Object creation from class
let personObj = new person(); // we can skip keyword `new` as it is optional. 
/*
console.log(personObj)
    //Output:
    person {
        firstName: 'Farhan',
        lastName: 'Ishraq',
        age: 10000,
        isMartian: false,
        city: 'Dhaka'
    }
---------------------------------------------------------------------------------  
    console.log(personObj.firstName) //Output: Farhan

---------------------------------------------------------------------------------
    console.log(personObj.getName()) //Output: My name is Farhan Ishraq
*/