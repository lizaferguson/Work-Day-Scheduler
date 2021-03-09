//setting variable to html element by id 
var timeDisplayEl = $('#clock');

//function to display time in jumbotron using moment
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

//calling displayTime function and setting interval to 1 sec (1000ms)
setInterval(displayTime, 1000);


// var plannerEl = document.getElementById('#planner');

// for (hour = 1, hour < 9, hour++) {
//   console.log(hour)
//   plannerEl.
// }






