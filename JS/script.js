// ENCRYPT KEYS

const keys = { 
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

const encriptarButton = document.querySelector(".encriptar-button");
const desencriptarButton = document.querySelector("button[class='desencriptar-button']");

encriptarButton.addEventListener("click", () => {
		const textoEncriptado = encriptar();
		ocultarNotFoundSection();
		mostrarText(textoEncriptado);
		
});

desencriptarButton.addEventListener("click", () => {
		const textoDesencriptado = desencriptar();
		ocultarNotFoundSection();
		mostrarText(textoDesencriptado);
});

function mostrarText(text){
	const textArea = document.querySelector(".encrypt-decrypt-msg");
	textArea.value = text;
}

function ocultarNotFoundSection(){
	const outputSection = document.querySelector(".output-section-not-found");
	outputSection.style.display = "none";
}

function encriptar() 
{
	let text = (document.querySelector("textarea")).value;
  	
  	for (let vocal in keys) 
  	{
	    const regex = new RegExp(vocal, "g");
	    text = text.replace(regex, keys[vocal]);
  	}
  	return text;
}

function desencriptar()
{
	let text = (document.querySelector("textarea")).value;
	for(let vocal in keys)
	{
		const reemplazo = keys[vocal];
		const regex = new RegExp(reemplazo, "g");
		text = text.replace(regex, vocal);
	}
	return text;
}

