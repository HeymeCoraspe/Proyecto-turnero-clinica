const formConsulta = document.getElementById('formConsulta');

formConsulta.addEventListener('submit', function(event) {
    event.preventDefault();

    // Aquí puedes agregar el código para enviar la consulta si es necesario
    
    // Limpiar el formulario después de enviarlo
    formConsulta.reset();

    // Mostrar un mensaje de alerta
    alert('¡Su consulta se envió correctamente!');
});