/*
    When one class shares property to other class, it is called inheritance.
    The class that shares is 'parent class' and the class that receives is
    the `child class'.
*/

class Father{
    num1=10;
    num2=20;
    addNumber(){
        let sum = this.num1+this.num2;
        console.log(sum);
    }
}

class Son extends Father{

}
let SonObj = new Son();
// Here, 'Father' is parent class and 'Son' is child class. 

console.log(SonObj); //Output: Son { num1: 10, num2: 20 }

console.log(SonObj.num1); //Output: 10

SonObj.addNumber(); //Output: 300  
