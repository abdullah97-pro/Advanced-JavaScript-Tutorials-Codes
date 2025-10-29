const searchInput = document.querySelector('#searchInput');
const ListCourse = document.querySelectorAll('#courseList li');

searchInput.addEventListener("input",(e) => {
    const term = e.target.value.toLowerCase();

    ListCourse.forEach((item) =>{
        item.style.display = item.textContent.toLowerCase().includes(term) ? "block":"none";
    });
});
