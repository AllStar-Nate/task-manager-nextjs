let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
function formatDatetoTag(date) {
    var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    var b = date.split(/\D/);
    return months[b[1]-1] + '-' + b[2];
}

keys  = Object.keys(tasks);
keys = keys.filter(key => tasks[key].length !== 0);

const date =[]
const completeTasks =[]
keys.forEach(day => {
    console.log(day)
    let num = 0
    
    date.push(formatDatetoTag(day))
    tasks[day].forEach(task =>{
        if (task.status === "Completed"){
            num += 1
        }
    })
    completeTasks.push(num)
});
console.log(date)
console.log(completeTasks)

const barChartData = [{
        x:completeTasks,
        y:date,
        mode: "markers",
        type:"bar",
        marker: {title: date, color: 'rgba(59, 154, 241, 1)'},
        text: date,
        orientation:"h",
        textposition: 'inside',
        textfont: {color: "white", family: "Impact", size: 15},
        width: 1,
}]

const lineChartData = [{
    x:date,
    y:completeTasks,
    mode:"lines",
    marker: {color: 'rgba(59, 154, 241, 1)'}
}]

const layout = {
    autosize: true,
    automargin: false,
    title: "COMPLETED TASKS PER DAY",
    xaxis: {title: {text: "COMPLETED TASKS"}, showticklabels: true, automargin: true, gridcolor: '#444444'},
    yaxis: {title: "DATE", type: 'category', showticklabels: true, automargin: true, gridcolor: '#444444', autorange:false, range:[-0.5, 10]},
    plot_bgcolor: "transparent",
    paper_bgcolor: "transparent",
    font: {color: "grey", family: "Impact", size:18},

};

var config = { responsive: true, staticPlot: false}
Plotly.newPlot(barChart, barChartData, layout, config)