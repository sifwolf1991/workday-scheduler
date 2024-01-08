// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this function will ensure jQuery only runs once HTML has rendered

$(document).ready(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

// Variable which grabs current hour, in 24 hour time//
// function to execute for every time-block element,
// If statement 
// 'this' here refers to the global object, and specifies here all elements with element ids
// if the timeblock row's element id is less than the current hour, class 'past' will be applied;
// otherwise, if the timeblock is the same as the current hour, class 'present' will be applied;
// in all other cases, the time-block will be classed as 'future'

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: Add code to display the current date in the header of the page.

var currentDay = dayjs().format('dddd, D MMMM, YYYY');
$('#currentDay').text(currentDay);

var dateTime = $('#dateTime');
var saveBtn = document.querySelector(".saveBtn");

var currentHour = dayjs().hour();

function printDateTime() {
    var date = dayjs().format("dddd, MMM Do YYYY")
    dateTime.text(date);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

// Variable which grabs current hour, in 24 hour time//
// function to execute for every time-block element,
// If statement 
// 'this' here refers to the global object, and specifies here all elements with element ids
// if the timeblock row's element id is less than the current hour, class 'past' will be applied;
// otherwise, if the timeblock is the same as the current hour, class 'present' will be applied;
// in all other cases, the time-block will be classed as 'future'


function hourCounter() {
    $('.timeBlock').each(function () {
        var BlockHour = $(this).attr("id").split("time")[1];

        console.log("currentHour" + currentHour)
        console.log("BlockHour" + BlockHour)

        if (BlockHour < currentHour) {
          $(this).addClass("past");        
        }
        else if (BlockHour == currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }})}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Creates an event listener from the save buttons on a click event. 
  // when used for an event listener, 'this' refers to the HTML object which received the event, in this case, a save button


$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
})

$("#time08 .description").val(localStorage.getItem("time08"));
$("#time09 .description").val(localStorage.getItem("time09"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));

printDateTime();
hourCounter();

});