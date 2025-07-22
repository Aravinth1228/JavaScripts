const user = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const keys = Object.keys(user);
keys.forEach(key => {
    console.log(`${key}: ${user[key]}`);
});
