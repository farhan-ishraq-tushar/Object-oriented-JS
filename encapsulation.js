// Encapsulation: Binding or wrapping group of data or actions in one place.

/*
Features of Encapsulation: 
 1. Grouping Data & Actions
 2. Hides complexity
 3. Data Protection
 4. Controlled Access
 5. Enhances Maintainability
  
 In JS we achieve it by
 1. Using closures
 2. Using constructor functions
 3. Using ES6 Classes
*/

// Encapsulation using closures
function createCounter(){
    let count = 0;
    return{
        increment: function(){
            count++
        },
        decrement: function(){
            count--
        },
        getCount:function(){
            return count;
        }
    }
}

const counter=createCounter();
counter.increment() // 1
counter.increment() // 2
counter.increment() // 3
counter.increment() // 4
counter.increment() // 5
counter.decrement() // 4
counter.decrement() // 3
console.log(counter.getCount()) //Output: 3



// Encapsulation Using Constructor Functions
function createMyCounter(){
    let count=0

    this.increment=()=>{
        count++
    }
    this.decrement=()=>{
        count--
    }
    this.getCount=()=>{
        return count;
    }
}

const myCounter= new createMyCounter;
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.increment(); // 3
myCounter.increment(); // 4
myCounter.increment(); // 5
myCounter.decrement(); // 4
myCounter.decrement(); // 3

console.log(counter.getCount()); //Output: 3



// Encapsulation Using ES6 Classes
class createNewCounter{
    #count=0
    increment(){
        this.#count++
    }
    decrement(){
        this.#count--
    }
    getCount(){
        return this.#count
    }

}
let newCounter = new createNewCounter()
newCounter.increment() //1
newCounter.increment() //2
newCounter.increment() //3
newCounter.increment() //4
newCounter.increment() //5
newCounter.decrement() //4
newCounter.decrement() //3
newCounter.decrement() //2
console.log(newCounter.getCount()) //2