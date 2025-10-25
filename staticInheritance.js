//Static property in inheritance
class Father{
    static greetParent(){
        return 'Hello, I am the Father!';
    }
}

class Son extends Father{
    static greetChild(){
        return 'Hello, I am the Son!';
    }
}

console.log(Son.greetParent()); //Output: Hello, I am the Father!
console.log(Father.greetParent()); //Output: Hello, I am the Father!
console.log(Son.greetChild()); //Output: Hello, I am the Son

/*
    As we declared 'static' keyword in 'Father' class; we do not
    require to create an object to get output. 
*/