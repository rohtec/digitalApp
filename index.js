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
  	
  } function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
  }
