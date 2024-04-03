// OBTENER EL FORMULARIO
const registroPaciente = document.getElementById('loginPaciente');
registroPaciente.addEventListener('submit', function(event) {
event.preventDefault(); 

// USUARIO Y CONTRASEÑA
const usuarioPaciente = registroPaciente.elements['usuario'].value;
const contraseñaPaciente = registroPaciente.elements['contraseña'].value;

// LOCALSTORAGE
const storedUsuario = localStorage.getItem('usuarioPaciente');
const storedContraseña = localStorage.getItem('contraseñaPaciente');
//CONIDCIONES
if (usuarioPaciente === storedUsuario && contraseñaPaciente === storedContraseña) {
  alert('Inicio de sesión exitoso');
  window.location.href = 'adminPaciente.html'; 
} else {
  alert('Usuario o contraseña incorrectos');
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
    

