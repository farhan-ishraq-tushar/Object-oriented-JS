// Overriding -> When child class changes any property of parent class. 

class Father{
    addNumber(){
        let num1=10;
        let num2=20;
        console.log(num1+num2)
    }
}

class Son extends Father{
    addNumber(){
        let num1=100;
        let num2=2000; 
        console.log(num1+num2);
    }
}

let SonObj=new Son();
SonObj.addNumber(); //Output: 2100
/*
    Due to 'overriding' property of 'Father' class changed.  
*/

let FatherObj = new Father();
FatherObj.addNumber(); //Output: 30
/*
    As, 'parent' class does not inherit anything;
    'addNumber()' is unchanged here.
*/