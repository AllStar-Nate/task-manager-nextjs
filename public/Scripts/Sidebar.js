const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')
const navBar = document.querySelector('#navbar')
const slideContainer = document.querySelector('#slider-container')
let isMouseOverBar = true;




openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active')
    navBar.style.pointerEvents = "none"
    if (slideContainer) slideContainer.style.pointerEvents = "none";
    isMouseOverBar = false
})

hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active');
    if (navBar) navBar.style.removeProperty("pointer-events")
    if (slideContainer) slideContainer.style.removeProperty("pointer-events")
        isMouseOverBar = true;
        
})

sideMenu.addEventListener('mousedown', () => {
    isMouseOverBar = true;
 
});

document.addEventListener('click', () => {
    if(isMouseOverBar){
        
    isMouseOverBar = false;
    }
    
});
document.addEventListener('touchend', () => {
    if(isMouseOverBar){
        
    isMouseOverBar = false;
    }
    
});
document.addEventListener('mouseup', () => {
    if(!isMouseOverBar){
        
    sideMenu.classList.remove('active');
    if (navBar) navBar.style.removeProperty("pointer-events")
    if (slideContainer) slideContainer.style.removeProperty("pointer-events")
    }
    
});

sideMenu.addEventListener('touchstart', () => {
    isMouseOverBar = true;
    
});

sideMenu.addEventListener('touchend', () => {
    isMouseOverBar = false;
});


document.getElementById('delete-storage-button').addEventListener('click', function(){
    if (confirm("Are you sure you want to clear local storage?")) {
    localStorage.clear();
    alert("Local storage cleared!");
    location.reload();
    }
  });