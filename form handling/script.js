// const addFieldBtn = document.querySelector('#addField');
// const container = document.querySelector('#fieldsContainer');

// let count = 0;

// addFieldBtn.addEventListener("click", () => {
//     count++;
//     const input = document.createElement('input');
//     input.type = "text";
//     input.placeholder = `Field ${count}`;
//     input.classList.add('form-field');
    
//     container.appendChild(input);
// });

// const submitBtn = document.querySelector('#submitForm');

// // submitBtn.addEventListener("click", () => {
// //     const values = [...document.querySelectorAll('.form-field')].map(
// //         (field) => field.value
// //     );
// //     console.log("Form Data: ",values);
// // });

// submitBtn.addEventListener("click", () => {
//   const fields = document.querySelectorAll(".form-field");
//   let valid = true;

//   fields.forEach((field) => {
//     if (field.value.trim() === "") {
//       field.style.border = "2px solid red";
//       valid = false;
//     } else {
//       field.style.border = "2px solid green";
//     }
//   });

//   if (valid) alert("All fields valid!");
// });


// // Basic Fetch Example
// document.getElementById('fetchBtn').addEventListener("click",() => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log("Fetch Post: ",data))
//   .catch((err) => console.error("Error: ",err));
// });

// const form = document.querySelector('#signupForm');

// form.addEventListener("submit", async(e) => {
//   e.preventDefault();

//   const formData = {
//     username:form.username.value,
//     email:form.email.value,
//   };

//   try{
//     const res = await fetch("/api/register",{
//       method: "POST",
//       headers: {"Content-Type":"application/json"},
//       body: JSON.stringify(formData),
//     });

//     const result = await res.json();
//     console.log("Response: ",result);
    
//   }catch(error) {
//     console.error("Submission Error:",error);
//   }
// });

const form = document.querySelector("#signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    username: form.username.value,
    email: form.email.value,
  };

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const result = await res.json();
  console.log("Response:", result);
});



