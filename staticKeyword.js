/* 
    'static' keyword is used to access any property of class without creating object. 
    When we want to share any property we use this keyword. 
*/
class person{
    firstName = 'Farhan' 
    static lastName = 'Ishraq'
}
/*
If we want to access any property of 'person' class,
we need to first create a object of this class. But if 
we use 'static' keyword any of the class property we do 
not need to declare any object.
*/

console.log(person.lastName)//Output: Ishraq