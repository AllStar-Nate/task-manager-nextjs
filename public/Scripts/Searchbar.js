(function () {
document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-bar-container');
    const resultsContainer = document.querySelector('.results-container');

            
    if (searchContainer && resultsContainer) {
        searchContainer.insertAdjacentElement('afterend', resultsContainer);
    }
});

function formatDatetoTag(date) {
    var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    var b = date.split(/\D/);
    return months[b[1]-1] + '-' + b[2];
}
const priorityButton = document.getElementById('priority-button');
const statusButton = document.getElementById('status-button');
const categoryButton = document.getElementById('category-button');

const resultsContainer = document.querySelector('.results-container');
const searchContainer = document.getElementById('search-bar-container');
const nav = document.getElementById('nav-container');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const resultsList = document.getElementById('results-list');
const closeSearch = document.getElementById('close-search');

function searchCalendar() {
    const query = searchBar.value.toLowerCase().replace(/\s/g, '');
    resultsList.innerHTML = '';

    if (query) {
        closeSearch.style.display = 'block';
        searchResults.style.borderBottomLeftRadius = '0px';
        searchResults.style.borderBottomRightRadius = '0px';
        searchContainer.style.borderBottom = '1px solid';
        searchContainer.style.borderBottomColor = '#444444';
        nav.style.borderBottomLeftRadius = '0px';
        nav.style.borderBottomRightRadius = '0px';
        searchContainer.style.borderBottomLeftRadius = '0px';
        searchContainer.style.borderBottomRightRadius = '0px';
        resultsList.parentElement.style.display = 'flex';
        let calendar = document.getElementById('calendar');
        let tasks = JSON.parse(localStorage.getItem('taskDetails'));
        let keys  = Object.keys(tasks);
        console.log(tasks);
        keys.forEach(task => {
            if (tasks[task].title.toLowerCase().replace(/\s/g, '').includes(query)) {
                if (statusButton.value !== 'All' && tasks[task].status !== statusButton.value) {
                    console.log(statusButton.value);
                    return;
                }
                if (priorityButton.value !== 'All' && tasks[task].priority !== priorityButton.value) {
                    return;
                }
                if (categoryButton.value !== 'All' && tasks[task].category !== categoryButton.value) {
                    return;
                }
                const listItem = document.createElement('a');
                listItem.href = "/details";; 
                listItem.classList.add(tasks[task].category.replace(" ", "-").toLowerCase());
                const icon = document.createElement('i');
                icon.className = "fa-solid fa-magnifying-glass";
                icon.id = "results-icon";
                listItem.append(icon);
                const taskResult = document.createElement('p');
                taskResult.className = 'result-item';
                taskResult.textContent = tasks[task].title + ' - ' + formatDatetoTag(tasks[task].date).replace("-", " ");
                listItem.append(taskResult);
                  
                listItem.onclick = (event) => {;
                    showTaskDetails(tasks[task]);
                    resultsList.parentElement.style.display = 'none';
                };
                
                resultsList.appendChild(listItem);
            }
        
        });
        if (!resultsList.innerHTML){
            resultsList.innerHTML = '<div>No results found...</div>';
        }
        
        resultsList.parentElement.style.display = 'flex';
        resultsList.parentElement.style.overflowY = 'scroll';
    } else {
        closeSearch.style.display = 'none';
        resultsList.parentElement.style.display = 'none';
        searchResults.style.removeProperty('border-bottom-left-radius');
        searchResults.style.removeProperty('border-bottom-right-radius');
        searchContainer.style.removeProperty('border-bottom-color');
        searchContainer.style.removeProperty('border-bottom');
        nav.style.removeProperty('border-bottom-left-radius');
        nav.style.removeProperty('border-bottom-right-radius');
        searchContainer.style.removeProperty('border-bottom-left-radius');
        searchContainer.style.removeProperty('border-bottom-right-radius');
    }
    resultsList.parentElement.scrollTop = 0;
    
}       
        
searchBar.addEventListener('input', function() {
    searchCalendar()
});
searchBar.addEventListener('click', function() {
    searchCalendar()
});
searchBar.addEventListener('touch', function() {
    searchCalendar()
});

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

 searchBar.addEventListener('click', function() {
     dropdownMenu.classList.remove("show");
 });
 resultsContainer.addEventListener('click', function() {
     dropdownMenu.classList.remove("show");
 });
 
 
 
document.addEventListener('click', () => {
    if (!isMouseOverNav) {
        hideResults();
    }
});

function changePriority(){
    const selectElement = this;
    const selectedValue = selectElement.value;

    // Remove existing priority classes
    selectElement.classList.remove('all', 'critical', 'urgent', 'high-priority', 'medium-priority', 'low-priority');
    selectElement.classList.add(selectedValue.replace(" ", "-").toLowerCase());
}       

function changeCategory(){
    const selectElement = this;
    const selectedValue = selectElement.value;

    selectElement.classList.remove('all', 'plant-maintenance', 'grass-maintenance', 'general-maintenance', 'site-clearing', 'new-landscaping');
    selectElement.classList.add(selectedValue.replace(" ", "-").toLowerCase());
   
}

function changeStatus(){
    const selectElement = this;
    const selectedValue = selectElement.value;

    selectElement.classList.remove('all', 'pending', 'in-progress', 'completed');
    selectElement.classList.add(selectedValue.replace(" ", "-").toLowerCase());
}       
function showTaskDetails(task) {
    localStorage.setItem('selectedTask', JSON.stringify(task));
}
priorityButton.addEventListener('change', function() {
    changePriority.call(this)
});

categoryButton.addEventListener('change', function() {
    changeCategory.call(this)
});
statusButton.addEventListener('change', function() {
    changeStatus.call(this)
});

changePriority.call(priorityButton)
changeCategory.call(categoryButton)
changeStatus.call(statusButton)
        


    

})();

