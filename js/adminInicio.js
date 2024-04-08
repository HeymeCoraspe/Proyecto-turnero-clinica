window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollThreshold = window.innerWidth < 768 ? 100 : 400;
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
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

