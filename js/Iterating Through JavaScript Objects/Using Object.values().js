
const user = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const values = Object.values(user);
values.forEach(value => {
    console.log(value);
});