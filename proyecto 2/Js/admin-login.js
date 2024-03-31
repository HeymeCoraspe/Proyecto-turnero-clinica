window.onload = function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Los datos se han cargado correctamente.");
        location.reload();
    });
}