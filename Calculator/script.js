let currentDisplay = '';
// select all the button
let buttons = document.querySelectorAll(".button");

// Loop through all buttons
buttons.forEach(function (button) {

    // Add click event on every button
    button.addEventListener("click", function () {

        // Get button text
        let buttonText = button.innerText;

        // CLEAR BUTTON
        if (buttonText === "C") {

            currentDisplay = "";
            
        }

        // BACKSPACE BUTTON
        else if (buttonText === "←") {

            currentDisplay = currentDisplay.slice(0, -1);

        }

        // EQUAL BUTTON
        else if (buttonText === "=") {

            try {

                currentDisplay = eval(currentDisplay);

            } catch {

                currentDisplay = "Error";
            }

            
        }

        // PERCENTAGE BUTTON
        else if (buttonText === "%") {

            try {

                currentDisplay = eval(currentDisplay) / 100;

            } catch {

                currentDisplay = "Error";
            }

        }

        // NORMAL BUTTONS
        else {

            currentDisplay = currentDisplay + buttonText;

        }

        // UPDATE DISPLAY
        document.querySelector("#display").value = currentDisplay;
    });
});