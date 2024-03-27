const alumnos = [
    { nombre: 'Juan Diaz', descripcion: 'Apasionado por la programación, enfocado en el desarrollo web y a futuro me gustaria centrarme en el desarrollo de aplicaciones', imagen: 'card1.jpg' },
    { nombre: 'Heyme Coraspe', descripcion: 'Descripción del estudiante 2', imagen: 'card2.jpg' },
    { nombre: 'Antonio Gutierrez', descripcion: 'Descripción del estudiante 3', imagen: 'card3.jpg' },
    { nombre: 'Fabian Martin', descripcion: 'Descripción del estudiante 4', imagen: 'card4.jpg' }
];

const contenedorAlumnos = () => {
    const contenedor = document.getElementById('contenedorCards');

    alumnos.forEach(alumno => {
        const card = document.createElement('div');
        card.classList.add('col-sm-3', 'mb-3');
        card.innerHTML = `
            <div class="card">
                <img src="img/${alumno.imagen}" class="card-img-top" alt="Foto de ${alumno.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${alumno.nombre}</h5>
                    <p class="card-text">${alumno.descripcion}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
};

contenedorAlumnos();
