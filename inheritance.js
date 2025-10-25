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



// ----------------------------------------------------------
// Constructor behavior in inheritance









// Case-3.2: Constructor inside both parent & child class parameters
class myFather{
     constructor(myFather_parameter){
        console.log(myFather_parameter)
     }
}

class mySon extends myFather{ 
    constructor(mySon_parameter){
        super();
        console.log(mySon_parameter)
    }
}
new myFather("Parameter from myFather"); /*Output: Parameter from myFather'.
Only 'constructor' of 'myFather' executed.*/

new mySon("Parameter from mySon"); 
/*Output-1: undefined
As, 'mySon' already has a 'parameter' it will not execute the 'parameter' 
of myFather. But, still it will execute the constructor of 'myFather'. As,
no valid parameter is passed the return type is 'undefined'. 

Output-2: Parameter from mySon
'Parameter' of 'mySon' executed.*/


