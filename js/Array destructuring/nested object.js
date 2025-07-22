let address = {street: "Cherry Road", city: "Salem", state: "Tamil Nadu", zip: "636007"};
let employee = {name: "Tiya", age: 12, gender: "female", address};
let {name, age, gender, address: {city, state, zip}} = employee;
console.log(name); // "Tiya"
console.log(age); // 30
console.log(gender); // "female"
console.log(city); // "Salem"
console.log(state); // "Tamil Nadu"
console.log(zip); // "636007"