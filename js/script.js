// Function to pad single digits with a leading zero
function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

// Set the date we're counting down to
var countDownDate = new Date("Jun 15, 2024 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = pad(days) + "<br>дни";
  document.getElementById("hours").innerHTML = pad(hours) + "<br>часа";
  document.getElementById("minutes").innerHTML = pad(minutes) + "<br>мин.";
  document.getElementById("seconds").innerHTML = pad(seconds) + "<br>сек.";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "ОТМИНАЛО";
  }
}, 1000);