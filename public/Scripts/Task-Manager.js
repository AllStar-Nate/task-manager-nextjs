(function () {
document.ondragover = (e) => {
    e.preventDefault();
}
document.ondragstart = (e) => {
}


let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
const tasksLength = Object.keys(tasks).length;
keys  = Object.keys(tasks);
keys = keys.filter(key => tasks[key].length !== 0);
//console.log(tasksLength);
//console.log(keys);
let daysBefore = 0;
let daysAfter = 8;
let taskDetails = {};
let today = new Date();
const statusOptions = ['Pending', 'In-Progress', 'Completed'];
let currentdate = formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate()), 0);

//console.log(currentdate)

////console.log(daysBefore);
function formatDate(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
function formatDatetoTag(date) {
  var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
  var b = date.split(/\D/);
  return months[b[1]-1] + '-' + b[2];
}
function formatDatetoLong(date) {
  var months = 'January February March April May June July August September October November December'.split(' ');
  var b = date.split(/\D/);
  return months[b[1]-1] + ' ' + b[2] + ', ' + b[0]; // returns 'January 01, 2021'
}
function formatDateShort(date) {
  const options = {month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
function formatDateNum(date) {
  const options = {month: 'numeric', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
function Rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomDate(date1, date2){
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  var date1 = date1 || '01-01-1970'
  var date2 = date2 || new Date().toLocaleDateString()
  date1 = new Date(date1).getTime()
  date2 = new Date(date2).getTime()
  if( date1>date2){
      return formatDate(new  Date(randomValueBetween(date2,date1)), 0) 
  } else{
      return formatDate(new Date(randomValueBetween(date1, date2)), 0)  

  }
}

function randomName(Category){
  let verb;
  let noun = ["Site", "Residence", "Household", "Hotel", "Firm", "Terrace", "Countryside", "Farmland", "Hillside", "Meadow", "Garden"][Math.floor(Math.random() * 11)]
  
  if (Category === "New Landscaping" || Category === "Site Clearing"){
      verb = ["Clear Area at", "Remove Landscaping From","Remove Foliage from", "Remove Flora from", "Dig Up", "Landscape at", "New Foundation at", "Clear Foundation at"][Math.floor(Math.random() * 7)]
  } else if (Category === "Plant Maintenance"){
      verb = ["Trim at", "Decorate", "Spruce Up", "Beautify", "Replant at", "New Foliage for", "New Flora for", "Trim Foliage at", "Rejuvenate Flora at"][Math.floor(Math.random() * 9)]
  } else if (Category === "Grass Maintenance"){
      verb = ["Trim at", "Landscape Decoration at", "Spruce Up", "Beautify", "New Terrain for", "New Foliage for", "Cut Grass at", "Trim Grass at", "Rejuvenate Soil at"][Math.floor(Math.random() * 9)]
  } else {
      verb = ["Trim at", "Decorate", "Spruce Up", "Landscape at", "Replant at", "New Foliage for", "New Flora for", "Trim Foliage at", "Rejuvenate Flora for"][Math.floor(Math.random() * 9)]
  }

  return verb + " " + noun;
}

const compareDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    //console.log(`${d1} is less than ${d2}`);
    return true;
  } else if (date1 > date2) {
    //console.log(`${d1} is greater than ${d2}`);
    return false;
  }
  return false;
};

function timeDifference(d1, d2){
  let date1 = new Date(d1)
  let date2 = new Date(d2)
  
  // Calculating the time difference
  // of two dates
  let Difference_In_Time =
      date2.getTime() - date1.getTime();
  
  // Calculating the no. of days between
  // two dates
  let Difference_In_Days =
      Math.round
          (Difference_In_Time / (1000 * 3600 * 24));
  /*/console.log("Total number of days between dates:\n" +
          date1.toDateString() + " and " +
          date2.toDateString() +
          " is: " + Difference_In_Days + " days");/*/
          return Difference_In_Days;
}
if (tasksLength === 0) {
    daysBefore = 7;
    daysAfter = 7;
}else {
  for (let i=0; i in keys; i++) {
      if (keys[i] !== currentdate) {
      daysBefore++;
      //console.log(daysBefore);
      } else {
      break;
      }
  }

  for (let i=0; i in keys; i++) {
      if(!compareDates(keys[i], currentdate) && timeDifference(currentdate, keys[i]) > 7) {
          daysAfter++;
          //console.log(daysAfter);
      }
  }
  daysAfter -= 1;
}


//console.log(daysAfter);
function createCalendar(daysAfter, daysBefore) {
  let calendar = document.getElementById('calendar');
      var date;
      var dateStr;
      var taskDate;
      var dateTag;
  
  for (let i = 0; i <= daysBefore + daysAfter; i++) {
      if (!keys[i]){
      date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i-daysBefore);
      taskDate = formatDate(date, 0);
      dateStr = formatDatetoLong(taskDate);
      dateTag = formatDatetoTag(taskDate);
      } else {
          //date = keys[i]);
          taskDate = keys[i];
          dateStr = formatDatetoLong(taskDate);
          dateTag = formatDatetoTag(taskDate);
      }
      const calendarBar = document.createElement('div');
      calendarBar.className = 'calendar-bar';
      calendarBar.id = taskDate;
      calendarBar.textContent = dateStr;

      //console.log(calendarBar);
      
      NumofTasks = Rand(1, 5);
      if (i - daysBefore === 0) {
          calendarBar.style.border = '3px solid #8a8a8a';
      }

      const taskList = document.createElement('div');
      taskList.className = 'task-list';
      taskList.id = (dateTag);
      taskList.date = taskDate;i
      taskList.addEventListener('drop', (e) => {
          recreateTasksObject();
      });
      // Create sample tasks
      if (!tasks[taskDate]){
          tasks[taskDate] = [];
          for (let j = 1; j <= NumofTasks; j++) {
              days = Rand(1, 7);
              const taskItem = document.createElement('a');
              taskItem.href = "/details";
              const task = document.createElement('p');
              task.className = 'task';
              const taskCategory = ['New Landscaping', 'Site Clearing', 'Plant Maintenance', 'Grass Maintenance', 'General Maintenance'][Math.floor(Math.random() * 5)]
              taskName = randomName(taskCategory)
              taskItem.appendChild(task);
              const dateStr = formatDatetoLong(taskDate);
              const dateShort = formatDateShort(new Date(formatDatetoLong(taskDate)));
              const taskDatenum = formatDateNum(new Date(formatDatetoLong(taskDate)));
              const taskDueDate = formatDate(new Date(formatDatetoLong(taskDate)), days);
              const taskStartDate = taskDate;
              taskItem.className = 'task-item';
              task.textContent = taskName;
              taskItem.draggable = "true";
              taskItem.date = dateShort;
              
              taskItem.onclick = (event) => {;
        
                      showTaskDetails(taskItem.Details);
                      
              };
              
  
              taskList.appendChild(taskItem);
              

              // Determine the status based on the due date comparison
              let status;
              let dateCompleted = "";
              if (compareDates(taskDueDate, currentdate)) {
                  status = statusOptions[Math.floor(Math.random() * 3)]; // Randomly select from all three options
              } else {
                  status = statusOptions[Math.floor(Math.random() * 2)]; // Randomly select from the first two options
              }
                  
              if (status == "Completed") {
                  dateCompleted = randomDate(taskDueDate, taskStartDate)
              }
              // Store task details in taskDetails object
              const taskKey = `${dateStr}-task${j}`;
              const newPosition = { lat: 13.193, lng: -59.543 }
              //console.log(taskKey);
              taskDetails[taskKey] = {
                  title: taskName, // Add title property
                  description: '',
                  startDate: taskStartDate,
                  date: taskDate,
                  dueDate: taskDueDate,
                  completionDate: dateCompleted,
                  priority: ['Critical', 'Urgent', 'High Priority', 'Medium Priority', 'Low Priority'][Math.floor(Math.random() * 5)],
                  category: taskCategory,
                  status: status,
                  audioSrc: 'Media/sample-audio.mp3',
                  videoSrc: 'Media/sample-video.mp4',
                  documentHref: 'Media/sample-document.pdf',
                  location: newPosition,
                  key: taskKey,
              };

              tasks[taskDate].push(taskDetails[taskKey]);
              taskItem.id = taskKey;
              taskItem.Details = taskDetails[taskKey];
              taskItem.classList.add(taskItem.Details.category.replace(" ", "-").toLowerCase())
              const labelContainer = document.createElement('div');
              labelContainer.className = 'label-container';
              labelContainer.id = 'label-container';
              taskItem.appendChild(labelContainer);
              const labelItem = document.createElement('p');
              labelItem.className = taskItem.Details.category.replace(" ", "-").toLowerCase()
              labelItem.textContent = taskItem.Details.category;
              labelContainer.appendChild(labelItem);
              if (taskItem.Details.status === "Completed"){
                  const statusItem = document.createElement('p');
                  labelContainer.appendChild(statusItem); 
                  statusItem.className = taskItem.Details.status.replace(" ", "-").toLowerCase()
                  statusItem.textContent = taskItem.Details.status;
                  labelContainer.appendChild(statusItem); 
              }
          
              if (compareDates(taskDueDate, currentdate) && taskItem.Details.status !== "Completed") {
                  taskItem.parentElement.classList.add('overdue');
                  const statusItem = document.createElement('p');
                  labelContainer.appendChild(statusItem); 
                  statusItem.className = "overdue"
                  statusItem.textContent = 'Overdue';
                  labelContainer.appendChild(statusItem); 
              }

              
          }   
      } else {
          for (let j = 1; j <= tasks[taskDate].length; j++) {

              const dueDate = tasks[taskDate][j - 1].dueDate;
              const startDate = tasks[taskDate][j - 1].startDate
              const taskItem = document.createElement('a');
              taskItem.href = "/details";
              const task = document.createElement('p');
              task.className = 'task';
              taskItem.appendChild(task);
              const dateStr = formatDatetoLong(taskDate);
              const dateShort = formatDateShort(new Date(formatDatetoLong(taskDate)));
              const taskDatenum = formatDateNum(new Date(formatDatetoLong(taskDate)));
              taskItem.className = 'task-item';
              taskItem.draggable = "true";
              task.textContent = tasks[taskDate][j - 1].title;
              taskItem.date = dateShort;

              taskItem.onclick = (event) => {;
        
                      showTaskDetails(taskItem.Details);
                      
              };
              taskList.appendChild(taskItem);
             

              const taskKey = `${dateStr}-task${j}`;
              taskDetails[taskKey] = tasks[taskDate][j - 1];
              taskItem.id = taskKey;
              taskItem.Details = taskDetails[taskKey];
              taskItem.classList.add(taskItem.Details.category.replace(" ", "-").toLowerCase())
              const labelContainer = document.createElement('div');
              labelContainer.className = 'label-container';
              labelContainer.id = 'label-container';
              taskItem.appendChild(labelContainer);
              const labelItem = document.createElement('p');
              labelItem.className = taskItem.Details.category.replace(" ", "-").toLowerCase()
              labelItem.textContent = taskItem.Details.category;
              labelContainer.appendChild(labelItem);
              if (taskItem.Details.status === "Completed"){
                  const statusItem = document.createElement('p');
                  labelContainer.appendChild(statusItem); 
                  statusItem.className = taskItem.Details.status.replace(" ", "-").toLowerCase()
                  statusItem.textContent = taskItem.Details.status;
                  labelContainer.appendChild(statusItem); 
              }
              if (compareDates(dueDate, currentdate) && taskItem.Details.status !== "Completed") {
                  taskItem.parentElement.classList.add('overdue');
                  const statusItem = document.createElement('p');
                  labelContainer.appendChild(statusItem); 
                  statusItem.className = "overdue"
                  statusItem.textContent = 'Overdue';
                  labelContainer.appendChild(statusItem); 
              }

          }
      }
      
      
      if (taskList.classList.contains('overdue')) {
          calendarBar.style.border ='3px solid rgb(186, 0, 0)';
      }
      calendarBar.appendChild(taskList);
      calendarBar.onclick = toggleTaskList;
      calendar.appendChild(calendarBar);
      }           
  localStorage.setItem('taskDetails', JSON.stringify(taskDetails));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

let openBar = null;

function setListHeight(taskList){
  const taskBars = Array.from(taskList.querySelectorAll('.task-item'))
  var divHeight = 0;
  
  taskBars.forEach((Item, index) => {
      divHeight += Item.offsetHeight;
  });
  taskList.style.maxHeight = divHeight * 1.3 + "px";
}


function toggleTaskList(event) {
  const bar = document.querySelector('.Open');
  const calendarBar = event.currentTarget;
  const taskList = calendarBar.querySelector('.task-list');
  
  var dateStr = formatDatetoLong(calendarBar.id);
  if (openBar && openBar !== calendarBar) {

      openBar.querySelector('.task-list').style.maxHeight = "0vh";
      openBar.querySelector('.task-list').parentElement.classList.remove('Open');
      
  }

  if (openBar === calendarBar) {
      
      openBar = null;
      calendarBar.classList.remove('Open');
      taskList.style.maxHeight = "0vh";
      
  } else {
      openBar = calendarBar;
      calendarBar.classList.add('Open');
      setListHeight(taskList)
  }

 
  let draggingItem = null;
  
      taskList.addEventListener('dragstart', (e) => {
          
          const div = e.target;
          e.dataTransfer.setDragImage(div, 200, 20);
          taskList.classList.add('drop-zone');
      
          draggingItem = e.target;
        
          e.target.classList.add('dragging');
          document.getElementById('slider-container').classList.remove('grabbing');
          document.getElementById('calendar-container').classList.add('no-scroll');
          calendar = document.getElementById('calendar');
          calendar.letDrag = false;
      });
      
      taskList.addEventListener('dragend', (e) => {
          
          taskList.classList.remove('drop-zone');
          document.getElementById('calendar').letDrag = true;
          calendar = document.getElementById('calendar');
          calendar.letDrag = true;
          document.body.style.removeProperty = 'cursor';
          e.target.classList.remove('dragging');
          document.querySelectorAll('.task-item').forEach(item => item.classList.remove('over'));
          draggingItem = null;
          document.getElementById('calendar-container').classList.remove('no-scroll');
          recreateTasksObject();
      });

      taskList.addEventListener('dragover', (e) => {

          calendar = document.getElementById('calendar');
          calendar.letDrag = false;
          document.getElementById('slider-container').classList.remove('grabbing');
 
          //console.log(calendar.letDrag)
          const draggingOverItem = getDragAfterElement(taskList, e.clientY);
          // Remove .over from all items
          document.querySelectorAll('.task-item').forEach(item => item.classList.remove('over'));

          if (draggingOverItem) {
          draggingOverItem.classList.add('over'); // Add .over to the hovered item
          
          taskList.insertBefore(draggingItem, draggingOverItem);
          //console.log(draggingOverItem.id);
          } else {
              taskList.appendChild(draggingItem); // Append to the end if no item below
          }
          
      });
      function getDragAfterElement(container, y) {
          const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];
          return draggableElements.reduce((closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
              return { offset: offset, element: child };
          } else {
              return closest;
          }
          }, { offset: Number.NEGATIVE_INFINITY }).element;
      }
      
}


function createCompleteCalendar() {

  let calendar = document.getElementById('calendar');
  const taskBars = calendar.querySelectorAll('.task-item')
  const completeCalendar = document.getElementById('complete-calendar');
  completeCalendar.innerHTML = "";
  taskBars.forEach((taskBar, index) => {
      if (taskBar.Details.status === "Completed") {
          const taskKey = taskBar.Details.key;
          const dueDate = taskDetails[taskKey].dueDate;
          const startDate = taskDetails[taskKey].startDate
          const newTaskItem = document.createElement('a');
          newTaskItem.href = "/details";
          newTaskItem.className = 'task-item';
          newTaskItem.id = taskKey;
          newTaskItem.Details = taskDetails[taskKey];
          newTaskItem.classList.add(newTaskItem.Details.category.replace(" ", "-").toLowerCase());
          const task = document.createElement('p');
          task.className = 'task';
          newTaskItem.appendChild(task);
       
          
          task.textContent = taskDetails[taskKey].title;


          newTaskItem.onclick = (event) => {;
              showTaskDetails(newTaskItem.Details);
          };
             
          

          const labelContainer = document.createElement('div');
          labelContainer.className = 'label-container';
          labelContainer.id = 'label-container';
          newTaskItem.appendChild(labelContainer);

          const labelItem = document.createElement('p');
          labelItem.className = newTaskItem.Details.category.replace(" ", "-").toLowerCase()
          labelItem.textContent = newTaskItem.Details.category;
          labelContainer.appendChild(labelItem);
              
          const dateItem = document.createElement('p');
          labelContainer.appendChild(dateItem); 
          dateItem.className = 'date';
          dateItem.textContent = formatDatetoLong(newTaskItem.Details.date);
          labelContainer.appendChild(dateItem); 
              
          completeCalendar.appendChild(newTaskItem);
      }
  });
}

function createPriorityCalendar() {

    let calendar = document.getElementById('calendar');
  
    let keys  = Object.keys(taskDetails);
  const priorityCalendar = document.getElementById('priority-calendar');
  priorityCalendar.innerHTML = "";
  keys.forEach((taskBar) => {
      if (taskDetails[taskBar].priority === "High Priority" && taskDetails[taskBar].status !== "Completed" || 
        taskDetails[taskBar].priority === "Critical" && taskDetails[taskBar].status !== "Completed" || 
        [taskBar].priority === "Critical" && taskDetails[taskBar].status !== "Completed" || 
        taskDetails[taskBar].priority === "Urgent" && taskDetails[taskBar].status !== "Completed") {
         
          const dueDate = taskDetails[taskBar].dueDate;
          const startDate = taskDetails[taskBar].startDate;
          const newTaskItem = document.createElement('a');
          newTaskItem.href = "/details";
          newTaskItem.className = 'task-item';
          newTaskItem.id = taskBar;
          newTaskItem.Details = taskDetails[taskBar];
          newTaskItem.classList.add(newTaskItem.Details.category.replace(" ", "-").toLowerCase());
          newTaskItem.classList.add(newTaskItem.Details.priority.replace(" ", "-").toLowerCase());
          const task = document.createElement('p');
          task.className = 'task';
          newTaskItem.appendChild(task);
       
          
          task.textContent = taskDetails[taskBar].title;


          newTaskItem.onclick = (event) => {;
              showTaskDetails(newTaskItem.Details);
          };
             
          

          const labelContainer = document.createElement('div');
          labelContainer.className = 'label-container';
          labelContainer.id = 'label-container';
          newTaskItem.appendChild(labelContainer);

          const priorityItem = document.createElement('p');
          priorityItem.className = newTaskItem.Details.priority.replace(" ", "-").toLowerCase()
          priorityItem.textContent = newTaskItem.Details.priority;
          labelContainer.appendChild(priorityItem);
              
          const dateItem = document.createElement('p');
          labelContainer.appendChild(dateItem); 
          dateItem.className = 'due-date';
          dateItem.textContent = formatDatetoLong(newTaskItem.Details.dueDate);
          labelContainer.appendChild(dateItem); 
          if (compareDates(dueDate, currentdate)) {
              const statusItem = document.createElement('p');
              labelContainer.appendChild(statusItem); 
              statusItem.className = "overdue"
              statusItem.textContent = 'Overdue';
              labelContainer.appendChild(statusItem); 
          }  
          priorityCalendar.appendChild(newTaskItem);
      }
  });
}


function showTaskDetails(task) {
  localStorage.setItem('selectedTask', JSON.stringify(task));
}
function formatContainer(){                   

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

createCalendar(daysAfter, daysBefore);
createCompleteCalendar();
createPriorityCalendar();
formatContainer();

function recreateTasksObject() {
  const calendarBars = document.querySelectorAll('.calendar-bar');
  const newTasks = {};
  const newTaskDetails = {};

  calendarBars.forEach(calendarBar => {
  const taskDate = calendarBar.id;
  const taskList = calendarBar.querySelector('.task-list');
  const taskItems = taskList.querySelectorAll('.task-item');

  newTasks[taskDate] = [];

  taskItems.forEach((taskItem, index) => {
      const taskKey = `${formatDatetoLong(taskDate)}-task${index + 1}`;
      const task = taskItem.Details;
      task.key = taskKey;

      newTasks[taskDate].push(task);
      newTaskDetails[taskKey] = task;
      taskItem.id = taskKey; // Update the taskItem id with the new taskKey
      taskItem.Details = task;
  });
  });
  tasks = newTasks;
  taskDetails = newTaskDetails;
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  localStorage.setItem('taskDetails', JSON.stringify(newTaskDetails));
  console.log('Tasks object recreated:', newTasks);
  console.log('Task details object recreated:', newTaskDetails);
  createCompleteCalendar();
  createPriorityCalendar();
  formatContainer();
  
}

})();