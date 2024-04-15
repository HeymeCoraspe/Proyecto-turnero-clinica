const inicioMedico = document.getElementById('inicioMedico');
inicioMedico.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const usuarioMedico = inicioMedico.elements['usuarioMedico'].value;
  const contraseñaMedico = inicioMedico.elements['contraseñaMedico'].value;

  // SE OBTIENEN LOS DATOS ALMACENADOS EN EL LOCALSTORAGE
  let medicos = JSON.parse(localStorage.getItem('medicos')) || [];

  // BUSCAR EL MEDICO EN LA LISTA DE MEDICOS
  const medico = medicos.find(m => m.usuarioMedico === usuarioMedico && m.contraseñaMedico === contraseñaMedico);

  if (medico) {
    // SI EL MEDICO EXISTE, INICIA SESION
    localStorage.setItem('usuarioMedico', usuarioMedico); //ALMACENANDO EL DATO DEL USUARIO QUE INGRESA PARA RECUPERARLO EN EL PANEL
    window.location.href = 'adminMedico.html';
  } else {
    // SI EL MEDICO NO EXISTE, MUESTRA UN MENSAJE DE ERROR
    Swal.fire({
      title: "No puede iniciar sesión.",
      text: "Usuario o contraseña incorrectos.",
      imageUrl: "/img/error.png",
      imageWidth: 212,
      imageHeight: 212,
      imageAlt: "Imagen de error"});
  }
});

  

// BOTONES
const btnCrearCuenta = document.getElementById('btnCrearCuenta');
btnCrearCuenta.addEventListener('click', function() {
window.location.href = 'registroMedico.html'; 
});

const btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', function() {
window.location.href = '../index.html'; 
});
  
