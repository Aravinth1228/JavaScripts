const user = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}