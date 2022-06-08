// get current date and add it to header
var currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').html(currentDate);

var tasks = {};



var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            taskArr: ["", "", "", "", "", "", "", "", "", ""],
            hourArr: ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
        };
    }

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




// add save button functionality and save task to localStorage
$(".saveBtn").click(function () {
    var taskArea = $(this).siblings(".task-area").val();
    var taskTime = $(this).siblings(".hour").text();

    var index = tasks.hourArr.indexOf(taskTime);

    tasks.taskArr[index] = taskArea;

    saveTasks();
});

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