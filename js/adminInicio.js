// Obtener elementos del DOM
const modal = document.getElementById('modal');
const adminLink = document.getElementById('adminLink');
const registroAdmin = document.getElementById('registroAdminPrincipal');
const close = document.getElementById('close');
const btnCerrar = document.getElementById('btnCerrar');
const usuarioInput = document.getElementById('usuarioAdminPrincipal');
const contraseñaInput = document.getElementById('contraseñaAdminPrincipal');

// SIRVE PARA MOSTRAR EL MODAL CON DISPLAY BLOCK
adminLink.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
});

// SIRVE PARA CERRAR EL MODAL HACIENDO CLICK EN EL BOTON DE X

close.addEventListener('click', function(event){
    modal.style.display = 'none';
});

// SIRVE PARA CERRAR EL MODAL HACIENDO CLICK EN EL BOTON CERRAR
btnCerrar.addEventListener('click', function(event){
    modal.style.display = 'none';
});

// SIRVE PARA CERRAR EL MODAL HACIENDO CLICK EN OTRO LUGAR AFUERA
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// SIRVE PARA VALIDAR EL USUARIO Y CONTRASEÑA AL MANDAR EL SUBMIT
registroAdmin.addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = usuarioInput.value;
    const contraseña = contraseñaInput.value;

// CONDICION PARA INGRESAR    

if (usuario === 'admin' && contraseña === 'rolling') {
    alert('Iniciando sesion');
    window.location.href = 'pages/inicioMedico.html';
    modal.style.display = 'none';

} else {
    alert('Usuario o contraseña incorrectos. Inténtelo de nuevo.');
}
});
