const addFieldBtn = document.querySelector('#addField');
const container = document.querySelector('#fieldsContainer');

let count = 0;

addFieldBtn.addEventListener("click", () => {
    count++;
    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = `Field ${count}`;
    input.classList.add('form-field');
    
    container.appendChild(input);
});

const submitBtn = document.querySelector('#submitForm');

// submitBtn.addEventListener("click", () => {
//     const values = [...document.querySelectorAll('.form-field')].map(
//         (field) => field.value
//     );
//     console.log("Form Data: ",values);
// });

submitBtn.addEventListener("click", () => {
  const fields = document.querySelectorAll(".form-field");
  let valid = true;

  fields.forEach((field) => {
    if (field.value.trim() === "") {
      field.style.border = "2px solid red";
      valid = false;
    } else {
      field.style.border = "2px solid green";
    }
  });

  if (valid) alert("All fields valid!");
});
