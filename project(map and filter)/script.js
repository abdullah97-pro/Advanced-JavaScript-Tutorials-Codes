// let cards = [
//   {
//     Title: "Book",
//     Desc: "This book is about algorithms",
//     img: "./img/1.jpg",
//   },
// ];

// let html = cards
//   .map(
//     (card) => `
//   <div class="container">
//     <img src="${card.img || "placeholder.jpg"}" alt="${card.Title}" />
//     <h1>${card.Title}</h1>
//     <h3>${card.Desc}</h3>
//   </div>
// `
//   )
//   .join("");//

// document.getElementById("card").innerHTML = html;
 // ${card.img || "placeholder.jpg"}, if card.img is empty, "placeholder.jpg" uses as a fallback.

// filter method

let cards = [
  {
    Title: "Book",
    Desc: "This book is about algorithms",
    img: "./img/1.jpg",
  },
  {
    Title: "Notebook",
    Desc: "A plain notebook for writing",
    img: "./img/1.jpg",
  },
];

// // Filter cards where Title includes "Notebook"
// let cardFilter = cards.filter((card) => card.Title.includes("Book"));

// Get the container div bg id
let containerCard = document.getElementById("card");

// Render filtered cards
cards.forEach((card) => {
  containerCard.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${card.img}" alt="${card.Title}" width="150px !important;">
      <div class="card-body">
        <h2 class="card-title">${card.Title}</h2>
        <p class="card-text">${card.Desc}</p>
      </div>
      </div>
    `;
});
