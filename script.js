// Show Time/Day
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


// Array of hours
var workHours = ['09 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
var currentTime = moment().format('h A')
window.setInterval('refresh()', 60000);


// For loop to create divs and classes
for (i = 0; i < workHours.length; i++) {
    var row = $("<div>")
    row.addClass("row time-block")
    
    var timeCol = $("<div>")
    timeCol.addClass("hour col-md-1 hour")
    timeCol.text(workHours[i])
    $(row).append(timeCol)
    var textCol = $("<textarea>")
    textCol.addClass("col-md-10")
    $(row).append(textCol)
    var btn = $("<button>")
    btn.addClass("col-md-1 saveBtn")
    btn.text("Save")
    $(row).append(btn)
    $(".container").append(row)

 if (workHours[i] < currentTime) {
    row.addClass("past")
} else if (workHours[i] === currentTime) { 
    row.addClass("present")
} else {
    row.addClass("future")
}
}
 function refresh(){
     window.location.reload();
 }

// Local Storage
$(".container").on("click", '.saveBtn', function () {
    var text = $(this).siblings("textarea").val();
    // console.log(text)
    var time = $(this).siblings(".hour").text();
    // console.log(time)
    localStorage.setItem(time, text)
})
$(".time-block").each(function(){
    // console.log($(this).find(".hour").text())
    var hour = localStorage.getItem($(this).find(".hour").text())
    // console.log(hour)
    $(this).find("textarea").val(hour);
})



