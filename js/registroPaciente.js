
const registroPaciente = document.getElementById('registroPaciente');
registroPaciente.addEventListener('submit', function(event) {
event.preventDefault();
  
const nombre = registroPaciente.elements['nombre'].value;
const apellido = registroPaciente.elements['apellido'].value;
const correo = registroPaciente.elements['correo'].value;
const telefono = registroPaciente.elements['telefono'].value;
const obraSocial = registroPaciente.elements['obraSocial'].value;
const usuarioPaciente = registroPaciente.elements['usuario'].value;
const contraseñaPaciente = registroPaciente.elements['contraseña'].value;


// PARA GUARDAR DATOS
localStorage.setItem('nombre', nombre);
localStorage.setItem('apellido', apellido);
localStorage.setItem('correo', correo);
localStorage.setItem('telefono', telefono);
localStorage.setItem('obraSocial', obraSocial);
localStorage.setItem('usuarioPaciente', usuarioPaciente);
localStorage.setItem('contraseñaPaciente', contraseñaPaciente);

// MENSAJE DE CONFIRMACION CON ALERT
alert('¡Registro exitoso! Ahora puedes iniciar sesión.')

});

// BOTON VOLVER -- PREGUNTAR AL PROFESOR POR ALGUNAS COSAS QUE SAQUE DE OTRAS PAGINAS
const btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', function() {
window.location.href = '../pages/inicioPaciente.html'; 

});

  