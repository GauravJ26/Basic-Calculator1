function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function calculateSquareRoot() {
  const display = document.getElementById("display");
  try {
    display.innerText = Math.sqrt(eval(display.innerText));
  } catch (e) {
    display.innerText = "Error";
  }
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    appendToDisplay(key);
  } else if (key === ".") {
    appendToDisplay(".");
  } else if (key === "+") {
    appendToDisplay("+");
  } else if (key === "-") {
    appendToDisplay("-");
  } else if (key === "*") {
    appendToDisplay("*");
  } else if (key === "/") {
    appendToDisplay("/");
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
