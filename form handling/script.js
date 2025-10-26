const addFieldBtn = document.querySelector('#addField');
const container = document.querySelector('#fieldsContainer');

let count = 0;

addFieldBtn.addEventListener("click", () => {
    count++;
    console.log(count);
    
});