let miGif = document.querySelector('img');
miGif.onclick = function () {
    let miSrc = miGif.getAttribute('src');
    if (miSrc === 'images/paisaje.gif') {
      miGif.setAttribute('src','images/paisaje2.gif');
    } else {
      miGif.setAttribute('src', 'images/paisaje.gif');
    }
}
let miBoton = document.querySelector('button');
let Mititulo = document.querySelector('h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor ingresa tu nombre hermos@.');
    if(!miNombre){
      estableceNombreUsuario();
    }else {
      localStorage.setItem('nombre', miNombre);
      Mititulo.innerHTML = 'Bienvenido chikillo/a, ' + miNombre;
    }
    localStorage.setItem('nombre', miNombre);
    Mititulo.textcontent = 'Bienvenido chikillo/a, ' + miNombre;   
}
if (!localStorage.getItem('nombre')){
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  Mititulo.textContent = 'Bienvenido chikillo/a, ' + nombreAlmacenado;
}
miBoton.onclick =function(){
  estableceNombreUsuario();
}