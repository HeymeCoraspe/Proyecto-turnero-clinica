
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

// Creando un objeto con los datos del medico
const medico = {
  nombre: registroMedico.elements['nombre'].value,
  apellido: registroMedico.elements['apellido'].value,
  correo: registroMedico.elements['correo'].value,
  telefono: registroMedico.elements['telefono'].value,
  especialidad: registroMedico.elements['especialidad'].value,
  usuarioMedico: registroMedico.elements['usuarioMedico'].value,
  contraseñaMedico: registroMedico.elements['contraseñaMedico'].value
};

registrarMedico(medico);
});

const registrarMedico = (medico) => {
  // OBTIENE LISTA DE MEDICOS
  let medicos = JSON.parse(localStorage.getItem('medicos')) || [];

  // VERIFICAR EL MEDICO MEDIANTE EL CORREO Y EL NOMBRE DE USUARIO
  const existeMedico = medicos.some(m => m.correo === medico.correo || m.usuarioMedico === medico.usuarioMedico);

  if (existeMedico) {
    // MOSTRANDO EL MENSAJE DE ALERTA CON SWEETALERT SI ES QUE EXISTE EL MEDICO
    Swal.fire({
      title: "Uups! Tenemos un problema",
      text: "El medico ya ha sido creado con este correo o nombre de usuario.",
      imageUrl: "/img/error.png",
      imageWidth: 212,
      imageHeight: 212,
      imageAlt: "Imagen de error"});
  } else {
    // Si el correo y el nombre de usuario no existen, añádelo a la lista y guárdala en el localStorage
    medicos.push(medico);
    localStorage.setItem('medicos', JSON.stringify(medicos));
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
  
  }
}

//BOTON VOLVER PARA INICIAR SESION
const btnVolver = document.getElementById('btnVolver');

btnVolver.addEventListener('click', function() {
  window.location.href = '../pages/inicioMedico.html'; 
});

  