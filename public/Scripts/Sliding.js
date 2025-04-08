
(function () {

  const slider = document.querySelector('.slider-container'),
    slides = Array.from(document.querySelectorAll('.slide'))



    const sideMenu = document.querySelector('#nav-menu')
let calendars = Array.from(document.querySelectorAll('.calendar'))


let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = Math.floor(slides.length / 2)
    
setPositionByIndex()
slides.forEach((slide, index) => {
    const calendar = slide.querySelector('.calendar')
    calendar.letDrag = true;
    calendar.addEventListener('touchstart', (e) => calendar.letDrag = false);
    calendar.addEventListener('mousedown', (e) => calendar.letDrag = false);
    calendar.addEventListener('touchend', (e) => calendar.letDrag = true);
    calendar.addEventListener('mouseup', (e) => calendar.letDrag = true);
    //Touch events

        slide.addEventListener('touchstart', (event) => {
            
            if (calendar.letDrag) {
                slide.classList.add('selected');
                setTimeout(() => {
                    touchStart(index)(event);
                }, 50);
            }
        });    
        
        slide.addEventListener('touchend', touchEnd);
        slide.addEventListener('touchmove', touchMove);
        // Mouse events
        slide.addEventListener('mousedown', (event) => {
            if (calendar.letDrag) {
                sideMenu.classList.remove('active');
                slide.classList.add('selected')
                touchStart(index)(event);
            }
        });
        slide.addEventListener('mouseup', touchEnd)
        slide.addEventListener('mouseleave', touchEnd)
        slide.addEventListener('mousemove', touchMove)
    
        slide.oncontextmenu = function(event) {
            event.stopPropagation()
            return false
            }
});



function touchStart(index){

    
    return function(event) {
            sideMenu.classList.remove('active');
            dropdownMenu.classList.remove("show");
            hideResults();
        
            currentIndex = index
            startPos = getPositionX(event)
            isDragging = true
            

            animationID = requestAnimationFrame(animation)
            if(calendar.letDrag){
                slider.classList.add('grabbing')
            }
            
            
            
    }
}

function touchEnd(){

    isDragging = false
    cancelAnimationFrame(animationID)

    const movedBy = currentTranslate - prevTranslate

    if(movedBy > 100 && currentIndex > 0)
        currentIndex -=1

    if(movedBy < -100 && currentIndex < slides.length - 1)
        currentIndex +=1

    setPositionByIndex()

    slider.classList.remove('grabbing')
    slides.forEach((slide, index) => {
        slide.classList.remove('selected') 
    });

}

function touchMove(event) {
    sideMenu.classList.remove('active');
    if (isDragging){
        if(!calendar.letDrag){
            slider.classList.remove('grabbing')  
            return false
        }
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
    }
    
}

function getPositionX(event) {
    return event.type.includes('mouse') 
    ? event.pageX 
    : event.touches[0].clientX
}

function animation() {
    setSliderPosition()
    if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
    slider.style.transform =`translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSliderPosition()
}

function adjustSliderSize() {
    slider.style.width = 100 * slides.length + 'vw';
    setPositionByIndex(); // Recalculate position after resizing
}
function setListHeight(taskList){
    const taskBars = Array.from(taskList.querySelectorAll('.task-item'))
    var divHeight = 0;
    
    taskBars.forEach((Item, index) => {
        divHeight += Item.offsetHeight;
    });
    taskList.style.maxHeight = divHeight * 1.3 + "px";
}
  
function formatContainer(){                   
    const openBar = document.querySelector('.Open');
    Items = Array.from(document.querySelectorAll('.task-item'));
    
    Items.forEach((Item, index) => {
        var divHeight = Item.offsetHeight;
      
    var lineHeight =  parseInt(window.getComputedStyle(Item).lineHeight); 
   
  
    var lines = divHeight / lineHeight;
    
    var labelContainer = Item.querySelector('#label-container');
  
    
    
    if (lines < 2.3){
        if (labelContainer) {
            labelContainer.style.marginLeft = "auto";
            labelContainer.style.removeProperty('margin-top');
            
        }
    }
    else {
        labelContainer.style.marginLeft = "0"; 
        labelContainer.style.marginTop = "10px";
     
    }
    if (openBar && Item.parentElement === openBar.querySelector('.task-list')){
  
        const taskList = Item.parentElement;
       
        setListHeight(taskList);
        
    }
    });
    
     
  } 
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    adjustSliderSize();
    formatContainer();
    document.querySelector('body').classList.add('preload')
    resizeTimeout = setTimeout(() => {
        document.querySelector('body').classList.remove('preload')
    }, 200);
});
adjustSliderSize();

})();
