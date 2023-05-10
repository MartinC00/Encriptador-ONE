// ENCRYPT KEYS

const keys = { 
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

const encriptarButton = document.querySelector(".encriptar-button");
const desencriptarButton = document.querySelector(".desencriptar-button");
const copyButton = document.querySelector(".copy-button");

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

copyButton.addEventListener("click", () => {
	
	// Crea un campo de texto "oculto"
  var aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.querySelector(".output-textarea").value);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);
  alert("Texto copiado !")
});

function mostrarText(text){
	const textArea = document.querySelector(".output-textarea");
	const divOutput = document.querySelector(".output");
	textArea.value = text;
	divOutput.style.display = "flex";
}

function ocultarNotFoundSection(){
	const munieco = document.querySelector(".munieco");
	const divText = document.querySelector(".not-found-div-text");
	divText.style.display = "none";
	munieco.style.display = "none";
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

