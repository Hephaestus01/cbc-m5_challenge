// get current date and add it to header
var currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').html(currentDate);

var tasks = {};

// function to load tasks when page loads
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // create task object with two arrays if they don't already exist
    if (!tasks) {
        tasks = {
            taskArr: ["", "", "", "", "", "", "", "", "", ""],
            hourArr: ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
        };
    }
    // iteration to match task with hour
    for (let i = 0; i < tasks.hourArr.length; i++) {
        var taskArea = tasks.taskArr[i];
        var hour = tasks.hourArr[i];

        // if taskArea has data, replace with new data in task area
        if (taskArea != false) {
            var replaceText = document.getElementById(`${hour}`);
            replaceText.value = taskArea;
        }
    }
};

// save button functionality and save task to localStorage
$(".saveBtn").click(function () {
    var taskArea = $(this).siblings(".task-area").val();
    var taskTime = $(this).siblings(".hour").text();
    var index = tasks.hourArr.indexOf(taskTime);
    tasks.taskArr[index] = taskArea;
    saveTasks();
});

// function to save tasks via save button
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// color change functionality
$(".hour").each(function () {
    const taskArea = $(".task-area");
    var timeBlock = $(this).text();
    var momentConvert = moment(timeBlock, "hA");
    if (momentConvert.diff(moment(), 'minutes') < 60 && momentConvert.diff(moment(), 'minutes') > 0) {
        $(this).siblings(".task-area").addClass("present");
    } else if (momentConvert.isAfter(moment())) {
        $(this).siblings(".task-area").addClass("future");
    } else { $(this).siblings(".task-area").addClass("past") }
});

loadTasks();