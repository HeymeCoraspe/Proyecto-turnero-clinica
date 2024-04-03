
const registroMedico = document.getElementById('registroMedico');
registroMedico.addEventListener('submit', function(event) {
event.preventDefault();

const nombre = registroMedico.elements['nombre'].value;
const apellido = registroMedico.elements['apellido'].value;
const correo = registroMedico.elements['correo'].value;
const telefono = registroMedico.elements['telefono'].value;
const especialidad = registroMedico.elements['especialidad'].value;
const usuarioMedico = registroMedico.elements['usuarioMedico'].value;
const contraseñaMedico = registroMedico.elements['contraseñaMedico'].value;


// GUARDANDO DATOS
localStorage.setItem('nombre', nombre);
localStorage.setItem('apellido', apellido);
localStorage.setItem('correo', correo);
localStorage.setItem('telefono', telefono);
localStorage.setItem('especialidad', especialidad);
localStorage.setItem('usuarioMedico', usuarioMedico);
localStorage.setItem('contraseñaMedico', contraseñaMedico);

alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

});

//BOTON VOLVER PARA INICIAR SESION
const btnVolver = document.getElementById('btnVolver');

btnVolver.addEventListener('click', function() {
  window.location.href = '../pages/inicioMedico.html'; 
});

  