// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	
//Parament navn

 	function hils(navn){
		 console.log(`Hej med dig ${navn}`);
	 }

//Argument

	hils("Ona");
	hils("Rosa");
	hils("Guapa");

}); // Afslutter: DOMContentLoaded