// get current date and add it to header
var currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').html(currentDate);

const changeColor = function () {
    const eventArea = $(".event-area");
    const hourEl = $(".hour").text();
    console.log(moment().format("hA"));
    console.log(hourEl);

    if (moment().format("hA") == hourEl) {
        eventArea.addClass("present");
    } else if (moment().format("hA") > hourEl) {
        eventArea.addClass("past");
    } else { eventArea.addClass("future") };
}
changeColor();
    
