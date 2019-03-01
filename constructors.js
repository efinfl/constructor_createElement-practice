// Below is a constructor function. Constructor function only serve to structure data that gets passed into it.
function Bike(kind, size, color, user) {
  this.kind = kind;
  this.size = size;
  this.color = color;
  this.user = user;
}

// To Output anything using the constructor, you need methods that use the constructor as a prototype
// Below, methods have been wrapped in a function so that they can be called when "clickMe" element is clicked.

document.getElementById("clickMe").onclick = function giveAnswer() {
  // Calls function to clear answers
  rmvAnswer();

  // This gets the value of each
  let nameInput = document.getElementById("name").value;
  let kindInput = document.getElementById("kind").value;
  let sizeInput = document.getElementById("size").value;
  let colorInput = document.getElementById("color").value;

  // This variable takes the values form above variables and passes them to the constructor
  let newUser = new Bike(kindInput, sizeInput, colorInput, nameInput);

  // Method that outputs "I ride a mountain bike. It's a 26 inch."
  Bike.prototype.ride = function() {
    return `${this.user} rides a ${this.kind} bike. It's a ${this.size} inch.`;
  };
  //Method that outputs "Oh, and the color of my mountain bike is red"
  Bike.prototype.red = function() {
    return `Oh, and the color of ${this.user}'s ${this.kind} bike is  ${
      this.color
    }`;
  };

  // You can now take the data form the variable(newUser) and run any method on it that you've created (ride, red)
  // The method can be passed directly into displayAnswer() as a parameter to display the output
  // But first check to make sure the form was filled out...
  if (
    newUser.kind !== "" &&
    newUser.size !== "" &&
    newUser.color !== "" &&
    newUser.user !== ""
  ) {
    // if true, then run the methods, else display a message.
    displayAnswer(newUser.ride());
    displayAnswer(newUser.red());
  } else
    displayAnswer(
      "I guess you ride a Bigwheel, cuase you didn't fill out the form."
    );
};

// function to dynamically add element and display giveAnswer() methods to the DOM
function displayAnswer(txt) {
  let t = txt;

  let anCont = document.createElement("div");
  anCont.className = "answerContainer";
  anCont.id = "anCont";

  document.getElementsByClassName("container")[0].append(anCont);

  let newH2 = document.createElement("h2");
  newH2.className = "answer";
  newH2.innerHTML = t;

  document.getElementsByClassName("answerContainer")[0].append(newH2);
}
// This function checks for an answers container and removes it if it exists
// so that it won't duplicate when the "clickMe" is clicked
const rmvAnswer = () => {
  let parentDiv = document.getElementById("anCont"); //gets element "anCont"
  // If one is found...
  if (parentDiv !== null) {
    // it gets deleted
    parentDiv.parentNode.removeChild(parentDiv);
  } return
};
