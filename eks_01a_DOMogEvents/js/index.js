
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	// 

	
	let number = 5;
	let textCountElement = document.getElementById("text-count");
	let plusBtn = document.getElementById("btn-count-increase");
	let minusBtn = document.getElementById("btn-count-decrease");


function updateNumber(){

textCountElement.textContent = number;
	}
	updateNumber();
 plusBtn.addEventListener('click', () => {
if(number < 10 ) { 
	number++;
	updateNumber();
}
});

minusBtn.addEventListener('click', () => {
if (number > 0){ 
	number--;
	updateNumber();
}
});

	

	
 




	
	

	
	


}); // Afslutter: DOMContentLoaded