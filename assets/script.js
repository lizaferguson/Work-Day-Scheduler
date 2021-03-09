//setting variable to html element by id 
var timeDisplayEl = $('#clock');

//function to display time in jumbotron using moment
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

//calling displayTime function and setting interval to 1 sec (1000ms)
setInterval(displayTime, 1000);

//setting variable for current hour of the day to pass into function
var now = moment().hour();

//function to change the background color of the hour row based upon current hour
//sets class to past=grey, present=orange, future=green 
function hoursColor() {
  if (now > 9) {
    $('#row9').addClass('past');
  } else if (now >= 9 && now < 10) {
    $('#row9').addClass('present');
  } else if (now < 9) {
    $('#row9').addClass('future');
  }

  if (now > 10) {
    $('#row10').addClass('past');
  } else if (now >= 10 && now < 11) {
    $('#row10').addClass('present');
  } else if (now < 10) {
    $('#row10').addClass('future');
  }

  if (now > 11) {
    $('#row11').addClass('past');
  } else if (now >= 11 && now < 12) {
    $('#row11').addClass('present');
  } else if (now < 11) {
    $('#row11').addClass('future');
  }

  if (now > 12) {
    $('#row12').addClass('past');
  } else if (now >= 12 && now < 13) {
    $('#row12').addClass('present');
  } else if (now < 12) {
    $('#row12').addClass('future');
  }

  if (now > 13) {
    $('#row1').addClass('past');
  } else if (now >= 13 && now < 14) {
    $('#row1').addClass('present');
  } else if (now < 13) {
    $('#row1').addClass('future');
  }

  if (now > 14) {
    $('#row2').addClass('past');
  } else if (now >= 14 && now < 15) {
    $('#row2').addClass('present');
  } else if (now < 14) {
    $('#row2').addClass('future');
  }

  if (now > 15) {
    $('#row3').addClass('past');
  } else if (now >= 15 && now < 16) {
    $('#row3').addClass('present');
  } else if (now < 15) {
    $('#row3').addClass('future');
  }

  if (now > 16) {
    $('#row4').addClass('past');
  } else if (now >= 16 && now < 17) {
    $('#row4').addClass('present');
  } else if (now < 16) {
    $('#row4').addClass('future');
  }

  if (now > 17) {
    $('#row5').addClass('past');
  } else if (now >= 17 && now < 18) {
    $('#row5').addClass('present');
  } else if (now < 17) {
    $('#row5').addClass('future');
  }
}

hoursColor();

function input9am() {
  
  var save = document.getElementById('#btn9am');

  save.addEventListener("click", showInput);

  function showInput() {
    var input = document.getElementById('#text-input9');
    
    input.textContent = 
  }

}











