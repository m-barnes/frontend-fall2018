function alertBox() {
  alert("Danger, Will Robinson. Danger!")
};

function promptBox() {
  var name = prompt("Please enter your name: ");
  document.getElementById("testArea").innerHTML = "Hello, " + name + "!";
};

function confirmBox() {
  var confirmation;
  if (confirm("Are we cleared to proceed?") == true) {
    confirmation = "Confirmed. We are a go.";
  }
  else {
    confirmation = "That's a negative, good buddy.";
  }
  document.getElementById("testArea").innerHTML = confirmation;
};

function danger(my_image) {
  my_image.src = "./images/danger.png";
};

function safe(my_image) {
  my_image.src= "./images/safe.png";
}

function randomNumber() {
  document.getElementById("randomValue").innerHTML = Math.floor(Math.random()*20)+1;
}

function factorialLoop() {
  var userInput = parseInt(prompt("Please input a number."));
  var counter = userInput;
  var factorial = 1;

  while ( counter > 1 ) {
    factorial *= counter;
    counter--;
    document.getElementById("testAreaLoop").innerHTML = "The factorial of " + userInput + " is " + factorial
  }
}

function factorialRecursion() {
  var number = parseInt(prompt("Please enter a number for the factorial:\n(decimal numbers will be rounded down.) "));
  try{
      var fact = function(n){
          if(n===1) {
          return 1;
          }
         else {
          return n*fact(n-1);
         }
      }
       document.getElementById("testAreaRecursion").innerHTML = "The factorial of " + number + " is " +fact(number)
  }
  catch(err) {
    alert("Please enter a whole, positive number.")
    factorialRecursion()
    }
}
