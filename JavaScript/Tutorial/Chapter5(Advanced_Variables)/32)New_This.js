/* 
    background: Object Oriented Programming (OOP) is another style of building an application eventhough we are focusing on more functional approach. One example of OOP based built in JavaScript method is the Date object where we use the "new" keyword to initialize a date object we are going to use
    
    structure: let date = new Date() // This will give the current date

    definition: `new` is used to create an instance of an object that has a constructor function.
    
    explanation 1: But what is a constructor function? Construcutor function is specialised function that returns an object with "this" binding to help facilitate building in OOP. 
    
    explanation 2: To give an analogy, it's like an array & object also can store multiple values but object is preferred to store related multiple values for easy accessing 

    explanation 3: Likewise we can use a factory (normal) function to create the constructor like function but constructor function is more efficient and streamlined, will explain the differences after I explain how to create the factory function and how easy is to do the same thing with constructor function
*/

// definition: A factory function is just a regular function

// sample: Scenario 1: creating a user object

// * Factory function
// => The function take a name and age as a parameter and return it as an object
// step 1: Create
function createUser(name, age, gender) {
  return { name: name, age: age, gender: gender };
}

// step 2: Calling it
let factory_user_1 = createUser("Arun", 25, "male");
console.log(factory_user_1);

// * Constructor function
// step 1: Create : constructor function must be Captilized
// => constructor function automatically creates a `this` object then automatically returns it unless specified otherwise
function User(name, age, gender) {
  // this = {}
  this.name = name;
  this.age = age;
  this.gender = gender;
  // return this
}

// step 2: Calling it: must use the word 'new' followed by constructor name
let constructor_user_1 = new User("Arun_Alag", 25, "male");

console.log(constructor_user_1);

/*
 - This are the output and if you realised, the one with the constructor give an object type of User instead of general object 
 *  { name: 'Arun', age: 25, gender: 'male' }
 *  User { name: 'Arun_Alag', age: 25, gender: 'male' }
 */

/*
    => Generally though the constructor functions are not written just like that but it's written within a class.
    structure : class <Name> { construcutor(param1,param2...){} }

    => In the class paradigm, the `this` object is created inside the class oppose to within the constructor the entire class will have access to it.
    => To write a method for within the class, we just have to <function_name>()
 */

class User_Class {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printName() {
    console.log(this.name);
  }
}

let class_user_1 = new User_Class("Arun Alagusunthram", 25, "male");

console.log(class_user_1);
class_user_1.printName();
