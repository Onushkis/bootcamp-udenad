// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	let navne = ["Ona", "Goda", "Rosa", ,];
let ulElement = document.querySelector('#liste');




	 navne.forEach((navn)=>{
		 ulElement.innerHTML += `<li>${navne}</li>`;
	})



	

}); // Afslutter: DOMContentLoaded