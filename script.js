
const textArea = document.querySelector(".entrada-texto");
const resposta = document.querySelector(".inserir-mensagem");
const divresultado = document.querySelector(".resultado");
const textoResultado= document.querySelector(".texto-resultado");

divresultado.style.display = "none";



function btnEncriptar(){
  criptografar(textArea.value);
  textArea.value = " ";
  resposta.style.display = "none";
  divresultado.style.display = "block";
}



function criptografar(stringEncriptada){
 
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])){

      stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
 
  textoResultado.innerText = stringEncriptada;

}

function btnDesencriptar(){
  descriptografar(textArea.value);
  textArea.value= " "; 
  resposta.style.display = "none";
  divresultado.style.display = "block";
}

function descriptografar(stringDesencriptada){
  
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++){
    if (stringDesencriptada.includes(matrizCodigo[i][1])){

      stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  textoResultado.innerText = stringDesencriptada;

}


function copiarTexto(){
  textoResultado.select();
  textoResultado.setSelectionRange(0,99999);
  document.execCommand("copy");
  alert("Texto copiado"); 
}


