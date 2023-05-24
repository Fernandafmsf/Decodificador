
const textArea = document.querySelector(".entrada-texto");
const resposta = document.querySelector(".inserir-mensagem");


function btnEncriptar(){
  criptografar(textArea.value);
 // resposta.value = textoEncriptado;
  textArea.value = " ";
}

function btnDesencriptar(){
  descriptografar(textArea.value);
  textArea.value= " "; 
}

function criptografar(stringEncriptada){
 
  let matrizCodigo = [["e", "enter"], ["i", "inter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])){

      stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  alert(stringEncriptada) ;

  return stringEncriptada

}

function descriptografar(stringDesencriptada){
  
  let matrizCodigo = [["e", "enter"], ["i", "inter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++){
    if (stringDesencriptada.includes(matrizCodigo[i][1])){

      stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  alert(stringDesencriptada) ;

}



