const alumnos = [
    { nombre: 'Juan Diaz', descripcion: 'Me gustó mucho esto de la programación y quiero seguir enfocado en mis estudios para asi a futuro centrarme en el desarrollo de aplicaciones.', imagen: 'card1.jpg' },
    { nombre: 'Heyme Coraspe', descripcion: 'Entusiasta de la tecnología y la programación, me gustaria seguir capacitandome aun más para que en el futuro pueda desempeñarme de la mejor manera.', imagen: 'card2.jpg' },
    { nombre: 'Antonio Gutierrez', descripcion: 'Me considero un estudiante comprometido con el aprendizaje continuo y el desarrollo de habilidades en programación.', imagen: 'card3.png' },
    { nombre: 'Fabian Martin', descripcion: 'Soy un estudiante creativo, me gusta indagar a fondo para poder lograr los trabajos.', imagen: 'fabiantop.jpg' }
];

const contenedorAlumnos = () => {
const contenedor = document.getElementById('contenedorCards');

alumnos.forEach(alumno => {
const card = document.createElement('div');
card.classList.add('col-sm-3', 'mb-3');
card.innerHTML = `
    <div class="card">
        <img src="/img/${alumno.imagen}" class="card-img-top" alt="Foto de ${alumno.nombre}">
        <div class="card-body">
            <h5 class="card-title">${alumno.nombre}</h5>
            <p class="card-text">${alumno.descripcion}</p>
            <div class="redesNosotros">
                <a href="https://github.com/" target="blank"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/" target="blank"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.facebook.com/" target="blank"><i class="bi bi-facebook"></i></a>
            </div>
        </div>
    </div>
`;

contenedor.appendChild(card);

    });
};

contenedorAlumnos();
