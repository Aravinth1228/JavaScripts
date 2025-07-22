let person = {name: "Tiya", age: 5, gender: "female"};
let {name = "guest", age = 25, gender = "unknown"} = person;
console.log(name); // "John"
console.log(age); // 30
console.log(gender); // "male"