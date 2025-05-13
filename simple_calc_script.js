const input = document.getElementsByClassName("display")[0];
const clear = document.getElementsByClassName("clear")[0];
const single_clear = document.getElementsByClassName("single-clear")[0];

function putting(button){
    input.value += button.innerText;                
}

function clearinput(){
    input.value = '';
}

function singleclear(button){
  input.value = input.value.slice(0, -1);
}

function putting(button) {
  const display = document.querySelector(".display");
  let value = button.textContent;

  if (value === "×") value = "*";
  if (value === "÷") value = "/";
  if (value === "−") value = "-";
  if (value === "+") value = "+";

  display.value += value;
}

function calc() {
  const display = document.querySelector(".display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

