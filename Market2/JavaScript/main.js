const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("header-shadow")
  : header.classList.remove("header-shadow");
});

const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");
});

const jobCards = document.querySelectorAll(".job-card");
const logo = document.querySelector(".logo");
const jobLogos = document.querySelector(".job-logos");
const jobDetailTitle = document.querySelector(
 ".job-explain-content .job-card-title"
);
const jobBg = document.querySelector(".job-bg");

jobCards.forEach((jobCard) => {
 jobCard.addEventListener("click", () => {

  const logo = jobCard.querySelector("svg");
  const bg = logo.style.backgroundColor;
  console.log(bg);
  jobBg.style.background = bg;
  const title = jobCard.querySelector(".job-card-title");
  jobDetailTitle.textContent = title.textContent;
  jobLogos.innerHTML = logo.outerHTML;
  wrapper.classList.add("detail-page");
  wrapper.scrollTop = 0;
 });
});

logo.addEventListener("click", () => {
 wrapper.classList.remove("detail-page");
 wrapper.scrollTop = 0;
   jobBg.style.background = bg;
});

function toggleLocations() {
  var otherLocations = document.querySelector('.other-locations');
  otherLocations.style.display = (otherLocations.style.display === 'none' || otherLocations.style.display === '') ? 'block' : 'none';
}


function toggleCategoriesNav(show) {
  var categoriesNav = document.querySelector('.Categories-nav');
  categoriesNav.style.display = show ? 'block' : 'none';
}


function filterCategoriesNav() {
  const input = document.getElementById('search-input');
  const categories = document.getElementsByClassName('Categories-nav')[0].getElementsByTagName('p');

  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const categoryName = category.textContent.toLowerCase();
      if (categoryName.startsWith(filter)) {
        category.style.display = 'block';
      } else {
        category.style.display = 'none';
      }
    }
  });

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    category.addEventListener('click', () => {
      input.value = category.textContent;
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  filterCategoriesNav();
});


