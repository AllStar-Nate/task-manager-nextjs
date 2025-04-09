const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("filter-container");
const resultsContainer = document.querySelector('.results-container');
const searchContainer = document.getElementById('search-bar-container');
const nav = document.getElementById('nav-container');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const resultsList = document.getElementById('results-list');
const closeSearch = document.getElementById('close-search');

function hideResults(){
    
  resultsList.innerHTML = '';
  resultsList.parentElement.style.display = 'none';
  resultsList.parentElement.style.display = 'none';
  searchResults.style.removeProperty('border-bottom-left-radius');
  searchResults.style.removeProperty('border-bottom-right-radius');
  searchContainer.style.removeProperty('border-bottom-color');
  searchContainer.style.removeProperty('border-bottom');
  nav.style.removeProperty('border-bottom-left-radius');
  nav.style.removeProperty('border-bottom-right-radius');
  searchContainer.style.removeProperty('border-bottom-left-radius');
  searchContainer.style.removeProperty('border-bottom-right-radius');
  closeSearch.style.display = 'none';
}

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    hideResults();
    
  };

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });
  let isMouseOverNav;

  closeSearch.addEventListener('click', function() {
      searchBar.value = "";
      hideResults();
  });
  nav.addEventListener('mouseover', () => {
      isMouseOverNav = true;
  });
  
  nav.addEventListener('mouseout', () => {
      isMouseOverNav = false;
  });
  
  nav.addEventListener('touchstart', () => {
      isMouseOverNav = true;
  });
  
  nav.addEventListener('touchend', () => {
      isMouseOverNav = false;
  });

document.addEventListener('click', () => {
    if (!isMouseOverNav) {
        dropdownMenu.classList.remove("show");
    }
});

