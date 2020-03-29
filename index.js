/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const formatTime = parseInt(timeString, 10)

  if (formatTime < 12) {
    return "Good Morning";
  } else if (formatTime > 12 && formatTime < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(string) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = string;
}