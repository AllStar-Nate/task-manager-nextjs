const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("filter-container");


const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    hideResults();
    
  };

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

document.addEventListener('click', () => {
    if (!isMouseOverNav) {
        dropdownMenu.classList.remove("show");
    }
});

