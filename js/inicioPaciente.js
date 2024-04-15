const inicioPaciente = document.getElementById('inicioPaciente');
inicioPaciente.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const usuarioPaciente = inicioPaciente.elements['usuarioPaciente'].value;
  const contraseñaPaciente = inicioPaciente.elements['contraseñaPaciente'].value;

  // SE OBTIENEN LOS DATOS ALMACENADOS EN EL LOCALSTORAGE
  let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

  // BUSCAR EL MEDICO EN LA LISTA DE MEDICOS
  const paciente = pacientes.find(m => m.usuarioPaciente === usuarioPaciente && m.contraseñaPaciente === contraseñaPaciente);

  if (paciente) {
    // SI EL MEDICO EXISTE, INICIA SESION
    localStorage.setItem('usuarioPaciente', usuarioPaciente);
    window.location.href = 'adminPaciente.html';
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
  
//BOTONES

const btnCrearCuenta = document.getElementById('btnCrearCuenta');
btnCrearCuenta.addEventListener('click', function() {
  window.location.href = 'registroPaciente.html'; // Redirigir a la página de registro
});

const btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', function() {
  window.location.href = '../index.html'; 
});
    

