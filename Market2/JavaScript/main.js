const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("header-shadow")
  : header.classList.remove("header-shadow");
});

// Check for saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Save the current theme to localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }
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


function simulateTyping(element, text) {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < text.length) {
      element.value += text[i];
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, 100); // adjust the typing speed here
}

function filterCategoriesNav() {
  const input = document.querySelector('#search-input');
  const categories = document.querySelectorAll('.Categories-nav p');

  input.addEventListener('focus', () => {
    const filter = input.value.toLowerCase();
    categories.forEach(category => {
      const categoryName = category.textContent.toLowerCase();
      if (filter === '' || categoryName.startsWith(filter)) {
        category.style.visibility = 'visible';
        category.style.display = 'block';
        category.style.pointerEvents = 'auto'; // enable pointer events
      } else {
        category.style.visibility = 'hidden';
        category.style.display = 'none';
        category.style.pointerEvents = 'none'; // disable pointer events
      }
    });
  });

  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    categories.forEach(category => {
      const categoryName = category.textContent.toLowerCase();
      if (filter === '' || categoryName.startsWith(filter)) {
        category.style.visibility = 'visible';
        category.style.display = 'block';
        category.style.pointerEvents = 'auto'; // enable pointer events
      } else {
        category.style.visibility = 'hidden';
        category.style.display = 'none';
        category.style.pointerEvents = 'none'; // disable pointer events
      }
    });
  });

  function hideCategories() {
    categories.forEach(category => {
      category.style.display = 'none';
    });
  }
  
  categories.forEach(category => {
    category.addEventListener('click', () => {
      input.value = ''; // clear the input value
      simulateTyping(input, category.textContent);
      hideCategories(); // hide all categories
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.Categories-nav') && !event.target.closest('#search-input')) {
      categories.forEach(category => {
        category.style.visibility = 'hidden';
        category.style.display = 'none';
        category.style.pointerEvents = 'none'; // disable pointer events
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', filterCategoriesNav);




window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var fullText = document.querySelectorAll('.full-text');
  var shortText = document.querySelectorAll('.short-text');

  if (width < 500) {
    fullText.forEach(function(el) {
      el.style.display = 'none';
    });
    shortText.forEach(function(el) {
      el.style.display = 'inline';
    });
  } else {
    fullText.forEach(function(el) {
      el.style.display = 'inline';
    });
    shortText.forEach(function(el) {
      el.style.display = 'none';
    });
  }
});