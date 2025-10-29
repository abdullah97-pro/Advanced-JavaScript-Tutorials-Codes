const searchInput = document.querySelector('#searchInput');
const ListCourse = document.querySelectorAll('#courseList li');

searchInput.addEventListener("input",(e) => {
    const term = e.target.value.toLowerCase();

    console.log(term);
    
});
