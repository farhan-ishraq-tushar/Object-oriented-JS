class person{
    
    // Constructor starts with 'constructor' keyword
    // Constructor executes automatically when object is created
    // Constructor can take parameter
    // Constructor method can't return any result
    constructor(){
        console.log('This is a constructor')
    }
}

let PersonObj = new person();
//Output: This is a constructor 



// -------------------------------------------
// constructor parameter
class newPerson{
    constructor(num1, num2){
        let sum = num1 + num2;
        console.log(sum);
    }
}

let newPersonObj = new newPerson(10, 20); // Output: 30
/*
 Here, parenthesis of newPerson() indicating the 
 parenthesis of the constructor.
*/ 



// ------------------------------------------------------
// Changing class property using constructor parameter 
class myPerson{
    num1=10;
    num2=20;

    constructor(a,b){
        this.num1=a;
        this.num2=b;
    }

    addTwoNumber(){
        return this.num1+this.num2
    }
}

let myPersonObj = new myPerson(450,550);
console.log(myPersonObj.addTwoNumber()); //Output: 1000