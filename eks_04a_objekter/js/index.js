// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	let navne =["ona", "goda", "rosa"];
	let ulElement = document.querySelector('#liste');
		
		function doImportantStuff(array){

			array.forEach((navn)=>{
				ulElement.innerHTML += `<li>${navn}</li>`;
			});
		}
	
	
doImportantStuff(navne);
	
	
	


}); // Afslutter: DOMContentLoaded