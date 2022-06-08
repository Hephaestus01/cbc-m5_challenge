// get current date and add it to header
var currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').html(currentDate);

// color change functionality
$(".hour").each(function () {
    const eventArea = $(".event-area");
    // console.log(moment().format("hA"));
    var timeBlock = $(this).text();
    var momentConvert = moment(timeBlock, "hA");
    if (momentConvert.diff(moment(), 'minutes') < 60 && momentConvert.diff(moment(), 'minutes') > 0) {
        console.log("present")
        $(this).siblings(".event-area").addClass("present");
    } else if (momentConvert.isAfter(moment())) {
        console.log("future")
        $(this).siblings(".event-area").addClass("future");
    } else {$(this).siblings(".event-area").addClass("past")}
});

