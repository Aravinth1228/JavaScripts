const user = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

// const entries = Object.entries(user);
// entries.forEach(entry => {
//     console.log(`${entry[0]}: ${entry[1]}`);
// });


// const person = {
//     name: "Tiya",
//     age: 30,
//     job: "Programmer"
// };

// const keys = Object.keys(person);
// for (let i = 0; i<keys.length; i++) {
//     console.log(keys[i] + ": " + person[keys[i]]);
// }

const person = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const entries = Object.entries(person);
for (let i = 0; i<entries.length; i++) {
    console.log(entries[i][0] + ": " + entries[i][1]);
}