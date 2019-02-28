// Below is a constructor function. Constructor function only serve to structure data that gets passed into it.
function Bike(kind, size, color, user) {
  this.kind = kind;
  this.size = size;
  this.color = color;
  this.user = user
}

// Create a variable that holds the data you want passed into the constructor
let eric = new Bike("mountain", 26, "red", "Eric");
let rob = new Bike("Road", 28, "black", "Rob")

// To Output anything using the constructor, you need methods that use the constructor as a prototype
// Below, methods have been wrapped in a function so that they can be called when "clickMe" element is clicked.

document.getElementById("clickMe").onclick = function giveAnswer() {
  // Method that outputs "I ride a mountain bike. It's a 26 inch."
  Bike.prototype.ride = function() {
    return `${this.user} rides a ${this.kind} bike. It's a ${this.size} inch.`;
  };
  //Method that outputs "Oh, and the color of my mountain bike is red"
  Bike.prototype.red = function() {
    return `Oh, and the color of ${this.user}'s ${this.kind} bike is  ${this.color}`;
  };
  // You can now take the data form the variable(eric, rob) and run any method on it that you've created (ride, red)
  // that gets structured by constructor(Bike).
  // Method can be stored in a variable...
  let ericRide = eric.ride();
  let ericRed = eric.red();

  // to be passed into displayAnswer() as a parameter or...
  displayAnswer(ericRide);
  displayAnswer(ericRed);
  
  // the method can be passed directly into displayAnswer() as a parameter
  displayAnswer(rob.ride());
  displayAnswer(rob.red());
};

// function to dynamically add element and display giveAnswer() methods to the DOM
function displayAnswer(txt) {
  let t = txt;
  let newH2 = document.createElement("h2");
  newH2.className = "answer"
  newH2.innerHTML = t
  let answerContainer = document.getElementsByClassName("answerContainer")[0];
  answerContainer.append(newH2)
}