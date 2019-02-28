// Below is a constructor function. Constructor function only serve to structure data that gets passed into it.
function Bike(kind, size, color) {
  this.kind = kind;
  this.size = size;
  this.color = color;
}

// Create a variable that holds the data you want passed into the constructor
let eric = new Bike("mountain", 26, "red");
let Rob = new Bike("Road", 28, "black")

// To Output anything using the constructor, you need methods that use the constructor as a prototype
// Below, methods have been wrapped in a function so that they can be called when "clickMe" element is clicked.

document.getElementById("clickMe").onclick = function giveAnswer() {
  // Method that outputs "I ride a mountain bike. It's a 26 inch."
  Bike.prototype.ride = function() {
    return `I ride a ${this.kind} bike. It is a ${this.size} inch.`;
  };
  //Method that outputs "Oh, and the color of my mountain bike is red"
  Bike.prototype.red = function() {
    return `Oh, and the color of my ${this.kind} bike is  ${this.color}`;
  };
  // You can now take the data form the variable(eric) and run any method you've created (ride, red)
  // that gets structured by constructor(Bike).
  let ericRide = eric.ride();
  let ericRed = eric.red();
  document.getElementById("answer").innerHTML = ericRide;
  document.getElementById("answer2").innerHTML = ericRed;
  
};
