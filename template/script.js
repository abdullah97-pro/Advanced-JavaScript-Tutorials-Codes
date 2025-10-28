const template = document.querySelector('#cardTemplate');
const container = document.querySelector('#cardsContainer');

const data = [
    {
        title: "HTML",
        desc: "Structure of a webpage"
    },
    {
        title: "CSS",
        desc: "Design and styling"
    },
    {
        title: "JavaScript",
        desc: "Interactivity and logic"
    }
];

data.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = item.title;
    clone.querySelector('.description').textContent = item.desc;
    container.appendChild(clone);
});