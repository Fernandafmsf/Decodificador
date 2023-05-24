
const textArea = document.querySelector(".entrada-texto");
const resposta = document.querySelector(".inserir-mensagem");


function btnEncriptar(){
  criptografar(textArea.value);
 // resposta.value = textoEncriptado;
  textArea.value = " ";
}

function criptografar(stringEncriptada){
 

  let matrizCodigo = [["e", "enter"], ["i", "inter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++){
    if (text.includes(matrizCodigo[i][0])){

      text=text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  console.log(stringEncriptada) ;

  return stringEncriptada

}

function descriptografar(){
  var text = formulario.mensagem.value;

  let matrizCodigo = [["e", "enter"], ["i", "inter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
  text = text.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++){
    if (text.includes(matrizCodigo[i][1])){

      text=text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  alert(text) ;

}



