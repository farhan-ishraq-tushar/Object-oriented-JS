class product{

    // setting a property with value
    set setPrice(value){
        this.price=value;
    }

    // retrieving the property
    get getPrice(){
        return this.price;
    }
}

let productObj = new product();
console.log(productObj) //Output: product {} 
// As no property is set, output is empty object


productObj.setPrice=100
console.log(productObj); //Output: product { price: 100 }
// As object property is set, the output is a proper object

console.log(productObj.getPrice); //Output: 100