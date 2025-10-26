const addFieldBtn = document.querySelector('#addField');
const container = document.querySelector('#fieldsContainer');

let count = 0;

addFieldBtn.addEventListener("click", () => {
    count++;
    const input = document.createElement('input');
    input.type = "text";
    
    container.appendChild(input);
});