// JS is a OOP languagae that has 4 principles. By using objects, we can create clean and reusable code.

// Definitions
/* 
Object is an instance of a class that has methods and properties and class is a blueprint of an object.
*/

// 1. ENCAPSULATION ~ With encapsulation, object’s methods and properties are enclosed within the object, so there are not exposed.

class Car {
  setAttr(model, year){
    this.model = model;
    this.year = year;
  }
  getModel(){
    console.log(this.model);
  }
  getYear(){
    console.log(this.year);
  }
}
const c = new Car();
c.setAttr('Mazda', 2015);
c.getModel();
c.getYear();

// 2. ABSTRACTION ~ hiding complex details and showing simple ones. It helps the code to be more understandable

function Person(name, age){
  this.name = name;
  this.age = age;
  const address = 'address';
  const findAddress = function(){
    console.log(`${address} is private`);
  }
  this.getAddress = function(){
    console.log(name, age);
    findAddress();
  }
}
const p = new Person('John', 45);
// p.findAddress() // typeError: p.findAddress is not a function
p.getAddress() // address is private

// In this example we have two functions inside the main function: findAddress and getAddress. Abstraction is achieved by hiding the variable ‘address’ and function ‘findAddress’ from the outside and it’s only accessible from getAddress function.

// 3. INHERITANCE ~ Inheritance allows for parent class to pass functionality to a child class, again, creating clean and reusable code, avoiding repeats.

class Car2 {
  constructor (speed){
    this.speed = speed;
  }
  drive(){
    console.log(`the vehicle is going ${this.speed}!`)
  }
}
class Motorcycle extends Car2 {
}
let moto = new Motorcycle('fast') 
moto.drive(); // the vehicle is going fast!

// We use keyword “extends” to create a subclass of class Car and we can see how Motocycle class inherits constructor and the function — drive- in this case.

// 4. PLOMORPHYSM ~ means the same method can be used on different objects or the same function is called on different classes.

// For example, if a Car and a Motocycle have the same function — drive, polymorphism gives us an ability to call the same method on different objects.

class Car3 {
  drive(){
    console.log('slow');
  }
}

class Motorcycle2 extends Car3 {
  drive() {
    console.log('fast');
  }
}
const car = new Car3();
const moto2 = new Motorcycle2();
car.drive(); // slow
moto2.drive(); // fast



