  const inicioMedico = document.getElementById('inicioMedico');
  inicioMedico.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const usuarioMedico = inicioMedico.elements['usuarioMedico'].value;
  const contraseñaMedico = inicioMedico.elements['contraseñaMedico'].value;

// SE OBTIENEN LOS DATOS ALMACENADOS EN EL LOCALSTORAGE

    const storedUsuario = localStorage.getItem('usuarioMedico');
    const storedContraseña = localStorage.getItem('contraseñaMedico');

// CONDICION PARA SABER SI LOS DATOS COINCIDEN
    if (usuarioMedico === storedUsuario && contraseñaMedico === storedContraseña) {
      alert('Inicio de sesión exitoso');
      window.location.href = 'adminMedico.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
});
  

// BOTONES
const btnCrearCuenta = document.getElementById('btnCrearCuenta');
btnCrearCuenta.addEventListener('click', function() {
window.location.href = 'registroMedico.html'; 
});

const btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', function() {
window.location.href = '../inicioJuan.html'; 
});
  
