
const registroMedico = document.getElementById('registroMedico');

//EXPRESIONES REGULARES PARA EL FORM 
const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telRegex = /^\+54[\d\s-]{10,}$/;
const usuarioRegex = /^[a-zA-Z0-9_]{5,20}$/;
const contraRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


const validarInput = (input, iconoError, iconoBien, mensajeError, regex) => {
  input.addEventListener('input', function() {
      if (input.value === '') {
          input.style.borderColor = '';
          iconoError.style.opacity = '0';
          iconoBien.style.opacity = '0';
          mensajeError.style.display = 'none';
      } else if (regex.test(input.value)) {
          input.style.borderColor = 'green';
          iconoError.style.opacity = '0';
          iconoBien.style.opacity = '1';
          mensajeError.style.display = 'none';
      } else {
          input.style.borderColor = 'red';
          iconoError.style.opacity = '1';
          iconoBien.style.opacity = '0';
          mensajeError.style.display = 'block';
      }
  });
}

const validarSelect = (select, iconoBien) => {
  select.addEventListener('change', function() {
      if (select.value === '' || select.value === 'valorNoValido') {
          iconoBien.style.opacity = '0';
      } else {
          select.style.borderColor = 'green';
          iconoBien.style.opacity = '1';
      }
  });
}

// LLAMANDO A LA FUNCION PARA CADA GRUPO
validarInput(
  document.getElementById('nombre'),
  document.querySelector('.validacionErrorNombre'),
  document.querySelector('.validacionBienNombre'),
  document.querySelector('.mensajeErrorNombre'),
  regex
);

validarInput(
  document.getElementById('apellido'),
  document.querySelector('.validacionErrorApellido'),
  document.querySelector('.validacionBienApellido'),
  document.querySelector('.mensajeErrorApellido'),
  regex
);

validarInput(
  document.getElementById('correo'),
  document.querySelector('.validacionErrorCorreo'),
  document.querySelector('.validacionBienCorreo'),
  document.querySelector('.mensajeErrorCorreo'),
  emailRegex
);

validarInput(
  document.getElementById('telefono'),
  document.querySelector('.validacionErrorTel'),
  document.querySelector('.validacionBienTel'),
  document.querySelector('.mensajeErrorTel'),
  telRegex
);

validarSelect(
  document.getElementById('especialidad'),
  document.querySelector('.validacionBienEsp'),
);

validarInput(
  document.getElementById('usuarioMedico'),
  document.querySelector('.validacionErrorUsuario'),
  document.querySelector('.validacionBienUsuario'),
  document.querySelector('.mensajeErrorUsuario'),
  usuarioRegex
);

validarInput(
  document.getElementById('contraseñaMedico'),
  document.querySelector('.validacionErrorContra'),
  document.querySelector('.validacionBienContra'),
  document.querySelector('.mensajeErrorContra'),
  contraRegex
);


registroMedico.addEventListener('submit', function(event) {
event.preventDefault();

// Creando un objeto con los datos del usuario
let usuario = {
  nombre: registroMedico.elements['nombre'].value,
  apellido: registroMedico.elements['apellido'].value,
  correo: registroMedico.elements['correo'].value,
  telefono: registroMedico.elements['telefono'].value,
  especialidad: registroMedico.elements['especialidad'].value,
  usuarioMedico: registroMedico.elements['usuarioMedico'].value,
  contraseñaMedico: registroMedico.elements['contraseñaMedico'].value
};

// Llamando a la función registrarUsuario
registrarUsuario(usuario);

// Obteniendo la lista de usuarios del localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Añadiendo el nuevo usuario a la lista
usuarios.push(usuario);

// Guardando la lista actualizada de usuarios en el localStorage
localStorage.setItem('usuarios', JSON.stringify(usuarios));


function registrarUsuario(usuario) {
  // Obtén la lista de usuarios del localStorage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verifica si el usuario ya existe
  let existeCorreo = usuarios.some(u => u.correo === usuario.correo);

  if (existeCorreo) {
    // Si el correo ya existe, muestra un mensaje de error
    alert('El usuario ya ha sido creado.');
  } else {
    // Si el correo no existe, añádelo a la lista y guárdala en el localStorage
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}

// const nombre = registroMedico.elements['nombre'].value;
// const apellido = registroMedico.elements['apellido'].value;
// const correo = registroMedico.elements['correo'].value;
// const telefono = registroMedico.elements['telefono'].value;
// const especialidad = registroMedico.elements['especialidad'].value;
// const usuarioMedico = registroMedico.elements['usuarioMedico'].value;
// const contraseñaMedico = registroMedico.elements['contraseñaMedico'].value;


// // GUARDANDO DATOS DEL FORM
// localStorage.setItem('nombre', nombre);
// localStorage.setItem('apellido', apellido);
// localStorage.setItem('correo', correo);
// localStorage.setItem('telefono', telefono);
// localStorage.setItem('especialidad', especialidad);
// localStorage.setItem('usuarioMedico', usuarioMedico);
// localStorage.setItem('contraseñaMedico', contraseñaMedico);

// MOSTRANDO EL MENSAJE DE ALERTA CON SWEETALERT
    Swal.fire({
    title: "Registro exitoso!",
    text: "Será redireccionado a la pagina de inicio de sesión.",
    imageUrl: "/img/success.png",
    imageWidth: 212,
    imageHeight: 212,
    imageAlt: "Imagen de envio de registro confirmado"});
    
// LIMPIA LA CONSULTA UNA VEZ ENVIADA
  registroMedico.reset();

// LIMPIA EL BORDE Y LOS ICONOS QUE QUEDABAN FIJOS CUANDO MANDABA LA CONSULTA
const inputs = registroMedico.querySelectorAll('input');
const selects = registroMedico.querySelectorAll('select');
const iconosError = registroMedico.querySelectorAll('.validacionErrorNombre, .validacionErrorApellido, .validacionErrorCorreo, .validacionErrorTel, .validacionErrorUsuario, .validacionErrorContra');
const iconosBien = registroMedico.querySelectorAll('.validacionBienNombre, .validacionBienApellido, .validacionBienCorreo, .validacionBienTel, .validacionBienEsp, .validacionBienUsuario, .validacionBienContra');

inputs.forEach(input => {
  input.style.borderColor = '';
});

selects.forEach(select => {
  select.style.borderColor = '';
});


iconosError.forEach(icono => {
  icono.style.opacity = '0';
});

iconosBien.forEach(icono => {
  icono.style.opacity = '0';
});

setTimeout(function() {
  window.location.href = '/pages/inicioMedico.html';
}, 3000);

});

//BOTON VOLVER PARA INICIAR SESION
const btnVolver = document.getElementById('btnVolver');

btnVolver.addEventListener('click', function() {
  window.location.href = '../pages/inicioMedico.html'; 
});

  