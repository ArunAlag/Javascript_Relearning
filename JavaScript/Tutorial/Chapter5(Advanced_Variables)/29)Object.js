// definition: Objects also can hold multiple data with multiple type but all those data are related

// subtopic: CRUD operations with Objects
// => Create
// structure : let <object_name> = { key: value, key:value, key:value....}
// => Generally the key_value pair is known as property

let person = {
  name: "Arun Alagsunthram",
  age: 25,
  gender: "male",
};

// => Read
// structure: <object_name>.<key_name>
console.log(person.name);

// subtopic: Adding function inside an object
let person_2 = {
  name: "Arun_Alag",
  age: 25.5,
  //structure : <function_name>: function() {} => We use anonymous function way
  sayHi: function () {
    console.log("Hi");
  },
  //structure: <function_name>() {} => This is 2nd way of defining functions in objects
  sayBye() {
    console.log("Bye");
  },
};

// => We can call it like below
person_2.sayHi();
person_2.sayBye();

// Challenge : Create an object called car with the properties
// - Make, Model, isUsed, add a function called makeNoise which logs out "Vroom"
const car = {
  make: "Honda",
  model: "City Sedan",
  isUsed: true,
  makeNoise: function () {
    console.log("Vroom");
  },
};

// => Read way 2
// structure : <object_name>['<key_name>']
console.log(car["make"]);

// subtopic: Adding object inside of an object [nested objects] and array
let profile = {
  name: "Kyle",
  hobbies: ["Jogging", "Futsal", "Programming"],
  address: {
    street: "12345 Main St",
    city: "Alor Setar",
  },
};

// => just like nested array use <array>[][], we can use <object_name>.<key_name>.<key_name> to access the property of the nested object.

// => In the context above, get the property of city
console.log(profile.address.city);

// Challenge: Create a property called book with the following properties
// - Title [String], Author [object with the properties of name and age]
let book = {
  title: "The magician",
  author: {
    name: "Arun Alag Venki",
    age: 24,
  },
};

console.log(book);

// => Update
// structure: <object_name>.<key_name> = "value"

book.title = "Magician";
console.log(book.title);
