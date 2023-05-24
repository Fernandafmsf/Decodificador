
const formulario = document.querySelector("form");
const resposta = document.querySelector(".inserir-mensagem");

function criptografar(){

  let text = formulario.mensagem.value;

  
  const newText = text
  .replace(/o/g, "ober")
  .replace(/a/g, "ai")
  .replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/u/g, "ufat");
  

  alert(joinText);



}



