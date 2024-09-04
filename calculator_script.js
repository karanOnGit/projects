// Get reference to the display element
const display = document.querySelector(".display");

// Add click event listeners to the number and operator buttons
const buttons = document.querySelectorAll("#row span");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      // Calculate and display the result
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = "Error";
      }
    }
    else if (button.textContent === "CE") {
      // Clear the last entry
      display.textContent = "";
    }
    else if (button.textContent === "Del") {
      // Delete the last character
      display.textContent = display.textContent.slice(0, -1);
    }
    else {
      // Append the clicked button's value to the display
      display.textContent += button.textContent;
    }
  });
});
