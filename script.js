function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteDigit() {
  let display = document.getElementById("display").value;
  document.getElementById("display").value = display.slice(0, -1);
}
function appendNumber(Number) {
  document.getElementById("display").value += Number;
}
function calculate() {
  let exp = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(exp);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
