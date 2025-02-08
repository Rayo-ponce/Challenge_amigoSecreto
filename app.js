// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
     
    let amigoAgregado = document.getElementById('amigo').value;
    console.log(amigoAgregado);

 if ( amigoAgregado == '') {
    alert("Por favor, inserte un nombre");
 } else {
    amigos.push(amigoAgregado);
    actualizarLista();
    limpiarCaja();
  }
  return;
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
   let lista =  document.getElementById('listaAmigos');
   lista.innerHTML = "";
   for (let i = 0; i < amigos.length; i++ ){
      let nombre =  document.createElement('li');
      nombre.innerHTML = amigos[i];
      lista.appendChild(nombre);
      console.log(lista);
   }
   return;
}

function sortearAmigo() {
   let numeroSorteado = Math.floor(Math.random()*6)+1;
   if ( amigos == ""){
      alert("Por favor, inserte un nombre");
   } else {
      let amigoSorteado = amigos[numeroSorteado]; 
      let resultado = document.getElementById('resultado');
      resultado.innerHTML = `El amigo secreto sorteado es:${amigoSorteado}`;
      }
   return;
}
 

