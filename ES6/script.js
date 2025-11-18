// // for (let i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 100);
// // }


// // Destructuring
// const colors = ["white","black","red","green","blue"];
// // console.log(colors[3]);
// const [a,b,c,d,e] = colors;
// console.log(e);

const person = {
  name: "Ali",
  age: 25,
  country: "Afghanistan",
  city: "Herat"
};

// console.log(person.name);
const {name,age,country} = person;
// console.log(name);
// console.log(age);
// console.log(country);
const {name: firstname, age:userage, city = "Kabul"} = person;
console.log(firstname);
console.log(city);





