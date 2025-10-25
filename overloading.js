// Overloading method -> different method of same name inside one class

/*
    - OOP like Java or C++, method overloading allows.
    - JavaScript has no direct support for method overloading.
    - Yet, you can simulate method overloading by examining the number
      of arguments.

*/
class myClass{
    
    myMethod(p1, p2, p3){
        if(arguments.length===1){
            console.log('Received one argument:', p1);
        }
        else if(arguments.length===2){
            console.log('Received two argument:', p1, p2);
        }
        else if(arguments.length===3){
            console.log('Received three argument:', p1, p2, p3);
        }
    }
}

let myClassObj = new myClass();
myClassObj.myMethod(1); //Output: Received one argument: 1
myClassObj.myMethod(1,2); //Output: Received two argument: 1 2
myClassObj.myMethod(1,2,3); //Output: Received three argument: 1 2 3
/*
    This way we are sending multiple parameter to one method. Though
    way of achieving is different that other OOP, end result is quite
    similar.  
*/