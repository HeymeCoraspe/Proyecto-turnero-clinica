// SE OBTIENE EL NOMBRE DE USUARIO DEL PACIENTE QUE INCIO SESION
const usuarioPaciente = localStorage.getItem('usuarioPaciente');

window.onload = function() {
  
  if (!usuarioPaciente) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    window.location.href = '/pages/inicioPaciente.html';
  }

  // Cuando el usuario cierra sesión
  document.getElementById('logout').addEventListener('click', function() {
    // Elimina los datos del usuario de localStorage
    localStorage.removeItem('usuarioPaciente');
  });
}


// OBTENER LOS MEDICOS 
const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

// BUSCANDO QUE PACIENTE INICIO SESION MEDIANTE USUARIO
const paciente = pacientes.find(m => m.usuarioPaciente === usuarioPaciente);

const displayPacienteInfo = (paciente) => {
  const pacienteInfoContainer = document.getElementById('pacienteInfo');
  pacienteInfoContainer.innerHTML = `
    <div><strong>Nombre:</strong> ${paciente.nombre} ${paciente.apellido}</div>
    <div><strong>Correo:</strong> ${paciente.correo}</div>
    <div><strong>Teléfono:</strong> ${paciente.telefono}</div>
    <div><strong>Obra social:</strong> ${paciente.obraSocial}</div>
  `;
};

// MOSTRANDO INFO DEL PACIENTE
if (paciente) {
  displayPacienteInfo(paciente);
} else {
  console.log('No se encontró al paciente');
}

// PARA CREAR TURNO
const form = document.getElementById('formularioTurno'); 

// ESTABLEZCO EL CORREO DEL PACIENTE COMO EL VALOR DEL CAMPO DE CORREO
form.elements['correo'].value = paciente.correo;
form.elements['obraSocial'].value = paciente.obraSocial;

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // OBTENGO LOS DATOS DEL FORM
  const turno = {
    fechaTurno: form.elements['fechaTurno'].value,
    hora: form.elements['hora'].value,
    correoPaciente: form.elements['correo'].value,
    especialidad: form.elements['especialidad'].value,
    usuarioMedico: form.elements['doctor'].value,
    obraSocial: form.elements['obraSocial'].value
  };

  // ACTUALIZAR LA LISTA DEL STORAGE
  const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

  // VERIFICO SI YA EXISTE UN TURNO EN LA MISMA FECHA Y HORA PARA EL MISMO MEDICO O PACIENTE
  const existeTurno = turnos.some(t => t.fechaTurno === turno.fechaTurno && t.hora === turno.hora && (t.usuarioMedico === turno.usuarioMedico || t.correoPaciente === turno.correoPaciente));

  if (existeTurno) {
    // SI EL MEDICO NO EXISTE, MUESTRA UN MENSAJE DE ERROR
    Swal.fire({
      title: "No puedes crear el turno.",
      text: "Ya existe un turno en la misma fecha y hora para el médico o paciente.",
      imageUrl: "/img/error.png",
      imageWidth: 212,
      imageHeight: 212,
      imageAlt: "Imagen de error"});
  } else {
    turnos.push(turno);
    localStorage.setItem('turnos', JSON.stringify(turnos));

    Swal.fire({
      title: "Listo!",
      text: "Su turno fue creado con exito.",
      imageUrl: "/img/success.png",
      imageWidth: 212,
      imageHeight: 212,
      imageAlt: "Imagen de envio de consulta confirmada"
    }).then(() => {
      // RECARGO LA PÁGINA INMEDIATAMENTE
      location.reload();
    });
  
    // RECARGO LA PÁGINA DESPUÉS DE 3000ms
    setTimeout(function(){ 
      location.reload(); 
    }, 3000);
  }
});

// OBTENGO EL INPUT DE FECHA - PARA PONER FECHA MINIMA EN LOS INPUT FECHA DEL CREAR TURNO
const fechaInput = document.getElementById('fechaTurno');
const hoy = new Date();
const fechaMinima = hoy.toISOString().split('T')[0];
fechaInput.min = fechaMinima;

// OBTENGO LOS SELECT
const selectEspecialidad = document.getElementById('especialidad');
const selectMedico = document.getElementById('doctor');

const medicos = JSON.parse(localStorage.getItem('medicos')) || [];
const especialidades = [...new Set(medicos.map(medico => medico.especialidad))];

// LLENO EL SELECT DE ESPECIALIDADES
  especialidades.forEach(especialidad => {
  selectEspecialidad.innerHTML += `<option value="${especialidad}">${especialidad}</option>`;
});

// LLENO EL SELECT DE DOCTORES CON TODOS LOS DOCTORES REGISTRADOS
medicos.forEach(medico => {
  selectMedico.innerHTML += `<option value="${medico.usuarioMedico}">${medico.nombre} ${medico.apellido}</option>`;
});

selectEspecialidad.addEventListener('change', function() {
  // LIMPIO EL SELECT DE MÉDICOS
  selectMedico.innerHTML = '';
  const especialidadSeleccionada = this.value;

  // FILTRO LOS DOCS QUE TENGAN LA ESPECIALIDAD SELECCIONADA
  const medicosFiltrados = medicos.filter(medico => medico.especialidad === especialidadSeleccionada);

  // SI NO HAY DOCS MUESTRO UN MENSAJE
  if (medicosFiltrados.length === 0) {
    selectMedico.innerHTML = '<option>No hay médicos para esta especialidad</option>';
  } else {
    // SI HAY DOCS LOS AGREGO AL SELECT
    medicosFiltrados.forEach(medico => {
      selectMedico.innerHTML += `<option value="${medico.usuarioMedico}">${medico.nombre} ${medico.apellido}</option>`;
    });
  }
});

selectMedico.addEventListener('change', function() {
  // OBTENGO EL MEDICO SELECCIONADO
  const medicoSeleccionado = medicos.find(medico => medico.usuarioMedico === this.value);
  selectEspecialidad.value = medicoSeleccionado.especialidad;
});


// PARA VER TURNO
const verTurnos = (usuario) => {
  // OBTENGO LA LISTA DE TURNOS DEL STORAGE
  const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

  // FILTRO LOS TURNOS QUE CORRESPONDAN AL USUARIO
  const turnosUsuario = turnos.filter(turno => turno.usuarioMedico === usuario || turno.correoPaciente === usuario);
  const tablaTurnos = document.getElementById('turnosBody');
  tablaTurnos.innerHTML = '';

  // SI NO HAY TURNOS, MUESTRO UN MENSAJE
  if (turnosUsuario.length === 0) {
    tablaTurnos.innerHTML = '<tr><td colspan="6">No tienes turnos asignados.</td></tr>';
  } else {
    // SI HAY TURNOS, LOS AGREGO A LA TABLA
    turnosUsuario.forEach(turno => {
    // BUSCO AL MEDICO QUE CORRESPOPONDA AL TURNO
    const medico = medicos.find(m => m.usuarioMedico === turno.usuarioMedico);
    const nombreMedico = medico ? `${medico.nombre} ${medico.apellido}` : 'Médico no encontrado';
      tablaTurnos.innerHTML += `<tr>
        <td>${turno.fechaTurno}</td>
        <td>${turno.hora}</td>
        <td>${turno.correoPaciente}</td>
        <td>${turno.especialidad}</td>
        <td>${nombreMedico}</td>  
        <td>${turno.obraSocial}</td>
      </tr>`;
    });
  }
}

verTurnos(paciente.correo);



