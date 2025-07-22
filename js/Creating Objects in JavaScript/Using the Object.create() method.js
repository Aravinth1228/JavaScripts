const personProto = {
sayHello: function() {
console.log(`Hello, my name is ${this.name}`);
    }
};
const person = Object.create(personProto);
person.name = "John";
person.age = 30;
person.job = "Developer";
console.log(person);