function printNum(num) {
  document.getElementById("display").value += num;
}

function compute() {
  let express = document.getElementById("display").value;
  let result = eval(express);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
