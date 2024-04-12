// SIRVE PARA QUE AL HACER SCCROLL EL NAVBAR SE MUESTRE CON OTRO BACKGROUND-COLOR PORQUE TIENE EL FIXED-TOP DE BOOTSTRAP
window.addEventListener('scroll', function() {
  let navbar = document.getElementById('navbar');
  let scrollThreshold = window.innerWidth < 768 ? 100 : 400;
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('scrolled'); //AL HACER SCROLL SE AGREGA ESTA CLASE
} else {
    navbar.classList.remove('scrolled');
}
});

//SIRVE PARA QUE EL LOGO DE WHATSAPP APAREZCA CON UNA OPACIDAD EN UN DETERMINADO SCROLL
const contenedorWhatsapp = document.getElementById('contenedorWhatsapp');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    contenedorWhatsapp.classList.add('mostrar');
  } else {
    contenedorWhatsapp.classList.remove('mostrar');
  }
});

// USANDO WINDOW.LOCATION CON ONCLICK PARA REDIRECCIONAR PAGINA ERROR AL BOTON VER ESPECIALIDADES
const error404 = () => {
  window.location.href = '/pages/error404.html';
}

//LLAMO A LA CONSULTA PARA USAR SWALLFIRE
const formConsulta = document.getElementById('formConsulta');

//EXPRESION REGULAR SACADA DE COPILOT
const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


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


formConsulta.addEventListener('submit', function(event) {
  event.preventDefault();    

  // MOSTRANDO EL MENSAJE DE ALERTA CON SWEETALERT
  Swal.fire({
      title: "Listo!",
      text: "Su consulta se envió correctamente, nos estaremos comunicando a la brevedad.",
      imageUrl: "/img/success.png",
      imageWidth: 212,
      imageHeight: 212,
      imageAlt: "Imagen de envio de consulta confirmada"});
      
  // LIMPIA LA CONSULTA UNA VEZ ENVIADA
    formConsulta.reset();

  // LIMPIA EL BORDE Y LOS ICONOS QUE QUEDABAN FIJOS CUANDO MANDABA LA CONSULTA
  const inputs = formConsulta.querySelectorAll('input');
  const iconosError = formConsulta.querySelectorAll('.validacionErrorNombre, .validacionErrorApellido, .validacionErrorCorreo');
  const iconosBien = formConsulta.querySelectorAll('.validacionBienNombre, .validacionBienApellido, .validacionBienCorreo');

  inputs.forEach(input => {
    input.style.borderColor = '';
  });

  iconosError.forEach(icono => {
    icono.style.opacity = '0';
  });

  iconosBien.forEach(icono => {
    icono.style.opacity = '0';
  });

});







