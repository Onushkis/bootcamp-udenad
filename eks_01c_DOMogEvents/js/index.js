
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	// 

	
	// let bool = true;
	let maxValue = 10;
	let minValue = 0;
	
	
	let number = 5;
	let textCountElement = document.getElementById("text-count");
	let plusBtn = document.getElementById("btn-count-increase");
	let minusBtn = document.getElementById("btn-count-decrease");

function updateNumber(){
	textCountElement.textContent = number;
}
	updateNumber();

	function checkMinMaxValue(direction){
		if(direction === "inc" && number < maxValue){
		number++;
		updateNumber();		
		console.log("hi");
	}

	if(direction === "dec" && number > minValue){
		number--;
		updateNumber();		
	}
			}

			plusBtn.addEventListener("click", () => checkMinMaxValue("inc"));
			minusBtn.addEventListener("click", () => checkMinMaxValue("dec"));


	
 




	
	

	
	


}); // Afslutter: DOMContentLoaded