
//LIBRERIA PARA LAS ANIMACIONES
AOS.init({
    duration: 1300,
    once: true,
    offset: 300,
  });

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

const formConsulta = document.getElementById('formConsulta');

formConsulta.addEventListener('submit', function(event) {
    event.preventDefault();    
// LIMPIA CONSULTA UNA VEZ ENVIADA
formConsulta.reset();
// MOSTRANDO EL MENSAJE DE ALERTA CON SWEETALERT
Swal.fire({
    title: "Listo!",
    text: "Su consulta se envió correctamente, en breve nos comunicaremos con usted.",
    imageUrl: "/img/success.png",
    imageWidth: 212,
    imageHeight: 212,
    imageAlt: "Imagen de envio de consulta confirmada"
  });
});



