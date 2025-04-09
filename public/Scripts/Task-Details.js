(function () {
    
    let currentTaskIndex = 0;
    let taskKey;
    let selectedTask = JSON.parse(localStorage.getItem('selectedTask')) || false;
    console.log(selectedTask);
    let listOfTasks = JSON.parse(localStorage.getItem('listOfTasks')) || {};
    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    let taskDetails = JSON.parse(localStorage.getItem('taskDetails')) || {};
    console.log(tasks);
    console.log(taskDetails);
    
    function formatDate(date, days) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()+ days).padStart(2, '0');
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
    const compareDates = (d1, d2) => {
        let date1 = new Date(d1).getTime();
        let date2 = new Date(d2).getTime();
      
        if (date1 < date2) {
          ////console.log(`${d1} is less than ${d2}`);
          return true;
        } else if (date1 > date2) {
          ////console.log(`${d1} is greater than ${d2}`);
          return false;
        }
        return false;
      };
    let today = new Date();
    let currentdate = formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate()), 0);
    
  
    

    function showTaskDetails(selectedTask){ 
        if (selectedTask) {
            document.getElementById('task-header').scrollIntoView;
            document.getElementById('add-task-button').style.display = 'block';
            document.getElementById('prev-task-button').style.display = 'block';
            document.getElementById('next-task-button').style.display = 'block';
            document.getElementById('task-header').textContent = 'Tasks for ' + formatDatetoLong(selectedTask.date);
            document.getElementById('save-task-button').textContent = "Save Changes";
            listOfTasks = tasks[selectedTask.date];
            console.log(listOfTasks);
            localStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
            let taskIndex;
            console.log(listOfTasks);
            console.log(selectedTask.key); 
            if(!!listOfTasks){
                taskIndex = listOfTasks.findIndex(task => task.key === selectedTask.key);
             }else{
                taskIndex = 0;
            }
        console.log(taskIndex);
        if (taskIndex !== -1){
            currentTaskIndex = taskIndex + 1;
            console.log("new Task List");
            console.log("New Index:" + currentTaskIndex);
        } else{
            currentTaskIndex = listOfTasks.length;
            currentTaskIndex += 1;
            console.log("Current Task List");
            console.log("Index:" + currentTaskIndex);
        }
            taskKey = selectedTask.key;
            console.log(currentTaskIndex);
            console.log(taskKey);
            document.getElementById('task-title-input').value = selectedTask.title;
            document.getElementById('task-header').scrollIntoView;
            document.getElementById('description-input').value = selectedTask.description;
            document.getElementById('task-start-date-input').value = selectedTask.startDate;
            document.getElementById('task-due-date-input').value = selectedTask.dueDate;
            document.getElementById('task-complete-date-input').value = selectedTask.completionDate;
            document.getElementById('task-priority-select').value = selectedTask.priority;
            document.getElementById('category-select').value = selectedTask.category;
            document.getElementById('task-status-select').value = selectedTask.status;
            document.getElementById('task-audio').src = selectedTask.audioSrc;
            document.getElementById('task-video').src = selectedTask.videoSrc;
            document.getElementById('task-document').href = selectedTask.documentHref;
            document.getElementById('task-document').textContent = selectedTask.title + ' Document';
            document.getElementById('task').style.display = 'flex';
            document.getElementById('nav-buttons').style.display = 'block';
            changePriority.call(document.getElementById('task-priority-select'));
            changeCategory.call(document.getElementById('category-select'));
            changeStatus.call(document.getElementById('task-status-select'));
        } else {
            document.getElementById('task-title-input').scrollIntoView;
            document.getElementById('task-header').textContent = 'New Task';
            document.getElementById('task').style.display = 'flex';
            document.getElementById('save-task-button').textContent = "Save New Task";
            document.getElementById('nav-buttons').style.display = 'block';
            document.getElementById('add-task-button').style.display = 'none';
            document.getElementById('prev-task-button').style.display = 'none';
            document.getElementById('next-task-button').style.display = 'none';
            }
        document.getElementById('nav-buttons').style.visibility = 'visible';
    }
    function navigateTask(direction) {
        const tasks = listOfTasks;
        if (tasks.length === 0) return;
    
        currentTaskIndex += direction;
        console.log("Task Index");
        console.log(currentTaskIndex)
        
        if (currentTaskIndex <= 0) {
            currentTaskIndex = tasks.length;}
        if (currentTaskIndex >= tasks.length + 1) {
            currentTaskIndex = 1;
        }
        console.log("New task index:", currentTaskIndex);
        selectedTask = listOfTasks[currentTaskIndex - 1];
        localStorage.setItem('selectedTask', JSON.stringify(selectedTask));
        const taskNumber = currentTaskIndex;
        showTaskDetails(selectedTask);
        changePriority.call(document.getElementById('task-priority-select'));
        changeCategory.call(document.getElementById('category-select'));
        changeStatus.call(document.getElementById('task-status-select'));
    }
    
    function changePriority(){
        const selectElement = this;
        const selectedValue = selectElement.value;
    
        selectElement.classList.remove('critical', 'urgent', 'high-priority', 'medium-priority', 'low-priority');
        selectElement.classList.add(selectedValue.replace(" ", "-").toLowerCase());
    }
    function changeCategory(){
        const selectElement = this;
        const selectedValue = selectElement.value;
    
        selectElement.classList.remove('plant-maintenance', 'grass-maintenance', 'general-maintenance', 'site-clearing', 'new-landscaping');
        selectElement.classList.add(selectedValue.replace(" ", "-").toLowerCase());
       
    }
    
    function changeStatus(){
        const selectElement = this;
        const selectedValue = selectElement.value;
    
        selectElement.classList.remove('pending', 'in-progress', 'completed');
        selectElement.classList.add(selectedValue.replace(" ", "-").toLowerCase());
    }
    
    
    
    document.getElementById('next-task-button').onclick = () => navigateTask(1);
    document.getElementById('prev-task-button').onclick = () => navigateTask(-1);
    document.getElementById('add-task-button').addEventListener('click', function(){
        localStorage.removeItem('selectedTask');
        location.reload();
    });
    
    document.getElementById('task-priority-select').addEventListener('change', function() {
        changePriority.call(this);
    });
    
    document.getElementById('category-select').addEventListener('change', function() {
        changeCategory.call(this);
    });
    document.getElementById('task-status-select').addEventListener('change', function() {
        changeStatus.call(this);
        const selectElement = this;
        const selectedValue = selectElement.value;
        if (selectedValue === 'Completed'){
            document.getElementById('task-complete-date-input').value = currentdate;
        } else {
            document.getElementById('task-complete-date-input').value = "";
        }
    });
    document.getElementById('task-complete-date-input').addEventListener('change', function() {
        const selectElement = this;
        const selectedValue = selectElement.value;
        if (selectedValue !== ''){
            document.getElementById('task-status-select').value = "Completed";
            changeStatus.call(document.getElementById('task-status-select'));
        }
    });
    
    document.getElementById('upload').addEventListener('change', function() {
        const selectElement = this;
        const selectedValue = selectElement.value;
        let NewPDF = document.getElementById('task-document');
        NewPDF.href = selectElement.value.replace("C:\\fakepath\\", "Media/")
        NewPDF.textContent = "New File (" + selectElement.value.replace("C:\\fakepath\\", "") + ")"
    })
    
    
    
    
    
    document.getElementById('save-task-button').onclick = () => {
        if (document.getElementById('task-title-input').value === "" || 
        document.getElementById('task-start-date-input').value =="" || 
        document.getElementById('task-due-date-input').value == "" || 
        document.getElementById('task-priority-select').value == "" || 
        document.getElementById('task-status-select').value == "" ||
        document.getElementById('category-select').value == ""){
            alert("Critical Fields Cannot Be empty!");
            return;
        }    
        
    
        const taskTitleInput = document.getElementById('task-title-input').value;
        const taskDescription = document.getElementById('description-input').value;
        const taskStartDateInput = document.getElementById('task-start-date-input').value;
        const taskDueDateInput = document.getElementById('task-due-date-input').value;
        const taskCompleteDateInput = document.getElementById('task-complete-date-input').value;
        const taskPrioritySelect = document.getElementById('task-priority-select').value;
        const taskCategorySelect = document.getElementById('category-select').value;
        const taskStatusSelect = document.getElementById('task-status-select').value;
        const taskAudioSrc = document.getElementById('task-audio').src;
        const taskVideoSrc = document.getElementById('task-video').src;
        const taskDocumentInput = document.getElementById('task-document-input');
        const taskDocumentHref = document.getElementById('task-document').href;
        const newPosition = document.getElementById('map').newPosition;
        const taskDate = selectedTask.date;
    
        if (taskStartDateInput > taskDueDateInput) {
            alert("Start date cannot be greater than due date");
            return;    
        }
        
       
        if (taskCompleteDateInput > currentdate) {
            alert("Complete date cannot be greater than current date");
            return;    
        }
        let newKey;
        let taskIndex;
        const dateStr = formatDatetoLong(taskStartDateInput);
        console.log(task[taskStartDateInput]);
        console.log(selectedTask.key); 
        if(!!tasks[taskStartDateInput]){
            taskIndex = tasks[taskStartDateInput].findIndex(task => task.key === selectedTask.key);
        }else{
            taskIndex = 0;
        }
        console.log(taskIndex);
        if (taskIndex !== -1){
            currentTaskIndex = taskIndex + 1;
            newKey = `${dateStr}-task${currentTaskIndex}`;
            console.log("new Task List");
            console.log("New Index:" + currentTaskIndex);
        } else{
            currentTaskIndex = tasks[taskStartDateInput].length;
            currentTaskIndex += 1;
            newKey = `${dateStr}-task${currentTaskIndex}`;
            console.log("Current Task List");
            console.log("Index:" + currentTaskIndex);
        }
        
        console.log(newKey);
    
        if(!!selectedTask){
            if (selectedTask.startDate !== taskStartDateInput && taskStartDateInput < currentdate) {
                alert("Start date cannot be before today");
                return;    
            }
            if (selectedTask.key === newKey){
                
            } else{
                console.log("Task is being moved to new date:");
                console.log(selectedTask.date);
                tasks[selectedTask.date] = tasks[selectedTask.date].filter(task => task.key !== taskKey);
                if (tasks[selectedTask.date].length === 0){
                    delete tasks[selectedTask.date];
                };
                selectedTask.date = taskStartDateInput;
                delete taskDetails[taskKey];
                console.log(tasks)
                console.log(taskDetails);
                
            }
            selectedTask.title = taskTitleInput;
            selectedTask.description = taskDescription;
            selectedTask.startDate = taskStartDateInput;
            selectedTask.dueDate = taskDueDateInput;
            selectedTask.completionDate = taskCompleteDateInput;
            selectedTask.priority = taskPrioritySelect;
            selectedTask.category = taskCategorySelect;
            selectedTask.status = taskStatusSelect;
            selectedTask.audioSrc = taskAudioSrc;
            selectedTask.videoSrc = taskVideoSrc;
            selectedTask.documentHref = taskDocumentHref;
            selectedTask.date = selectedTask.startDate;
            selectedTask.location = newPosition,
            selectedTask.key = newKey;
            console.log(selectedTask);
            taskDetails[selectedTask.key] = selectedTask;
            console.log(taskDetails);
            if (!tasks[taskDetails[selectedTask.key].date]) {
                tasks[taskDetails[selectedTask.key].date] = [];
            }
            tasks[taskDetails[selectedTask.key].date][currentTaskIndex - 1] = taskDetails[selectedTask.key];
            
            console.log(tasks)
            taskKey = newKey;
            alert("Changes to " + selectedTask.title + " have been saved");
        } else {
            if (taskStartDateInput < currentdate) {
                alert("Start date cannot be before today");
                return;    
            }
            console.log("New selectedTask must be created")
            selectedTask ={
            title: document.getElementById('task-title-input').value,
            description: document.getElementById('description-input').value,
            startDate: document.getElementById('task-start-date-input').value,
            date: "",
            dueDate: document.getElementById('task-due-date-input').value,
            completionDate: document.getElementById('task-complete-date-input').value,
            priority: document.getElementById('task-priority-select').value,
            category: document.getElementById('category-select').value,
            status: document.getElementById('task-status-select').value,
            audioSrc: document.getElementById('task-audio').src,
            videoSrc: document.getElementById('task-video').src,
            documentHref: document.getElementById('task-document').href,
            location: newPosition,
            key: newKey,
            };
            selectedTask.date = selectedTask.startDate;
            console.log(selectedTask);
            taskDetails[selectedTask.key] = selectedTask;
            console.log(taskDetails);
            if (!!tasks[taskStartDateInput]){
                tasks[taskStartDateInput][currentTaskIndex - 1] = selectedTask;
            } else{
                tasks[taskStartDateInput][currentTaskIndex - 1] = selectedTask;
            }
            console.log(tasks);
            taskKey = newKey;
            alert("New Task has been created");
        }
        listOfTasks = tasks[selectedTask.date];
        localStorage.setItem('selectedTask', JSON.stringify(selectedTask));
        console.log(selectedTask);
        localStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
        console.log(listOfTasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('taskDetails', JSON.stringify(taskDetails));
        
        showTaskDetails(selectedTask);
    }
    showTaskDetails(selectedTask);

})();
