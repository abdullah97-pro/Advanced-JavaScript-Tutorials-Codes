// // // // // // // // // for (let i = 0; i < 3; i++) {
// // // // // // // // //   setTimeout(() => console.log(i), 100);
// // // // // // // // // }


// // // // // // // // // Destructuring
// // // // // // // // const colors = ["white","black","red","green","blue"];
// // // // // // // // // console.log(colors[3]);
// // // // // // // // const [a,b,c,d,e] = colors;
// // // // // // // // console.log(e);

// // // // // // // const person = {
// // // // // // //   name: "Ali",
// // // // // // //   age: 25,
// // // // // // //   country: "Afghanistan",
// // // // // // //   city: "Herat"
// // // // // // // };

// // // // // // // // console.log(person.name);
// // // // // // // const {name,age,country} = person;
// // // // // // // // console.log(name);
// // // // // // // // console.log(age);
// // // // // // // // console.log(country);
// // // // // // // const {name: firstname, age:userage, city = "Kabul"} = person;
// // // // // // // console.log(firstname);
// // // // // // // console.log(city);


// // // // // // let arr1 = [1,2,3];
// // // // // // let arr2 = [4,5];

// // // // // // console.log(arr1);
// // // // // // console.log(arr2);

// // // // // // // spread operator
// // // // // // let combine = [...arr1,...arr2];
// // // // // // console.log(combine);

// // // // // const obj1 = { name: "Ali" };
// // // // // const obj2 = { age: 20 };
// // // // // const merged = { ...obj1, ...obj2 };
// // // // // console.log(merged); 


// // // // // const [x,y,...z] = [10,20,30,40,50];
// // // // // console.log(z);

// // // // // const { name, ...details } = { name: "Sara", age: 22, country: "Afghanistan" };
// // // // // console.log(details); 


// // // // function sum(...numbers) {
// // // //   return numbers.reduce((acc, n) => acc + n);
// // // // }

// // // // console.log(sum(1, 2, 3, 4, 5)); 


// // // function greet(name = "Guest") {
// // //   console.log(`Hello, ${name}!`);
// // // }

// // // greet(); // "Hello, Guest!"  fallback active and show the default value
// // // greet("Ali"); // "Hello, Ali!"

// // const user = {};
// // // console.log(user.profile.name);
// // console.log(user?.profile?.name); // chaining


// console.log(0 || 10);  // 10 (because 0 is falsy)
// console.log(0 ?? 10);  // 0  (0 is not null/undefined)


// const user = {
//   name: "Ali",
//   settings: { theme: null }
// };

// const theme = user?.settings?.theme ?? "light";
// console.log(theme); 
