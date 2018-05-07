// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML =
    "<span class='number'>" + days + "</span>" + "<p><br>DAYS</p>";
  document.getElementById("hour").innerHTML =
    "<span class='number'>" + hours + "</span>" + "<p><br>HOURS</p>";
  document.getElementById("minute").innerHTML =
    "<span class='number'>" + minutes + "</span>" + "<p><br>MINS</p>";
  document.getElementById("second").innerHTML =
    "<span class='number'>" + seconds + "</span>" + "<p><br>SECS</p>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$(document).ready(function() {
  //your code here
  $(".carousel").carousel({
    interval: 3000
  });
});

