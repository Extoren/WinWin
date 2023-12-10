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


const changeLocation = () => {
  const osloElement = document.querySelector('.Change');
  const otherLocations = document.querySelectorAll('.other-locations p');

  // Add event listeners to each <p> element in .other-locations
  otherLocations.forEach((location) => {
    location.addEventListener('click', () => {
      // Get the text content of the clicked location
      const newLocation = location.textContent;

      // Update the text content of the .Change element
      osloElement.textContent = newLocation;
    });
  });
};

changeLocation();




// Select the parent of the "search item" div
var searchItemParent = document.querySelector('.search.item').parentNode;

// Select all category items
var categoryItems = document.querySelectorAll('.category-item');

// Loop through each category item
categoryItems.forEach(function(item) {
  // Add click event listener
  item.addEventListener('click', function() {
    // Check if a "search item" div already exists
    var existingSearchItem = searchItemParent.querySelector('.search.item');
    
    // If it does, remove it
    if (existingSearchItem) {
      searchItemParent.removeChild(existingSearchItem);
    }

    // Create a new "search item" div
    var newSearchItem = document.createElement('div');
    newSearchItem.className = 'search item';
    newSearchItem.innerHTML = `
      ${this.textContent.trim()}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    `;

    // Append the new "search item" div to its parent
    searchItemParent.appendChild(newSearchItem);

    // Select the SVG element inside the "search item" div
    var closeButton = newSearchItem.querySelector('svg');

    // Add click event listener to the SVG element
    closeButton.addEventListener('click', function() {
      // Remove the "search item" div
      searchItemParent.removeChild(newSearchItem);
    });
  });
});

// Select the initial "search item" div
var initialSearchItem = document.querySelector('.search.item');

// Select the SVG element inside the initial "search item" div
var initialCloseButton = initialSearchItem.querySelector('svg');

// Add click event listener to the SVG element
initialCloseButton.addEventListener('click', function() {
  // Remove the initial "search item" div
  searchItemParent.removeChild(initialSearchItem);
});

function showLoginForm() {
  document.querySelector('.login').style.display = 'block';
  document.querySelector('.register').style.display = 'none';
  document.querySelector('.info').style.display = 'none';
  document.querySelector('.contents').style.display = 'none';
  document.querySelector('.box.official').style.display = 'none';
  document.querySelector('.box.family').style.display = 'none';
  document.querySelector('.box.family').style.display = 'block';
  document.querySelector('.box.official').style.display = 'block';
  document.querySelector('.arrow-left').style.display = 'none';
}

function showRegisterForm() {
  document.querySelector('.login').style.display = 'none';
  document.querySelector('.register').style.display = 'block';
  document.querySelector('.info').style.display = 'block';
}

function toggleActive(id) {
  // Get the active-bg element
  var activeBg = document.getElementById('active-bg');

  // Calculate the new position of the active-bg
  var newPosition = (id === 'register') ? '50%' : '0';

  // Update the left property of the active-bg
  activeBg.style.left = newPosition;

  // Get the current active element
  var activeElement = document.querySelector('.form-menu span.active');

  // Remove the 'active' class from the current active element
  if (activeElement) {
      activeElement.classList.remove('active');
  }

  // Add the 'active' class to the clicked element
  var clickedElement = document.getElementById(id);
  clickedElement.classList.add('active');
}


