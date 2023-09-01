// let display = document.getElementById('display');
// let deleteButton = document.getElementById('deleteButton')
// let currentInput = "";

// deleteButton.addEventListener("click", function () {
// 	let currentValue = display.value;
// 	let newValue = currentValue.slice(0, -1);
// 	display.value = newValue;
// currentInput = "";
// currentInput = result.toString();
// });

function appendToDisplay(character) {
	let inputField = document.getElementById('display');
	inputField.value += character;
	
}

 function clearDisplay() {
 	let inputField = document.getElementById('display');
 	inputField.value = "";
 }

  function calculateResult() {
  	let inputField = document.getElementById('display');
  	try {
  		let result = eval(inputField.value);
  		inputField.value = result;
  		
  	} catch (error) {
  		inputField.value = "Error";
  		
  	}
    
  }
  function deleteLastCharacter() {
      let inputField = document.getElementById('display');
      inputField.value = inputField.value.slice(0, -1);
  	
  }