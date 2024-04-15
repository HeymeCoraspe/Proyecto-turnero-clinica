// Obteniendo el nombre de usuario del médico que ha iniciado sesión
const usuarioPaciente = localStorage.getItem('usuarioPaciente');

// Obteniendo la lista de médicos del localStorage
const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

// Buscando al médico que ha iniciado sesión
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
    alert('Ya existe un turno en la misma fecha y hora para el médico o paciente.');
  } else {
    turnos.push(turno);
    localStorage.setItem('turnos', JSON.stringify(turnos));

    alert('Turno creado correctamente.');

    // RECARGO LA PÁGINA
    location.reload();
  }
});

// OBTENGO EL INPUT DE FECHA
const fechaInput = document.getElementById('fechaTurno');

// OBTENGO LA FECHA ACTUAL
const hoy = new Date();

// FORMATEO LA FECHA AL FORMATO CORRECTO
const fechaMinima = hoy.toISOString().split('T')[0];

// ESTABLEZCO LA FECHA MINIMA DEL INPUT
fechaInput.min = fechaMinima;

// OBTENGO LOS SELECTS
const selectEspecialidad = document.getElementById('especialidad');
const selectMedico = document.getElementById('doctor');

// OBTENGO LA LISTA DE MÉDICOS DEL STORAGE
const medicos = JSON.parse(localStorage.getItem('medicos')) || [];

// OBTENGO LAS ESPECIALIDADES DE LOS MÉDICOS
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

  // OBTENGO LA ESPECIALIDAD SELECCIONADA
  const especialidadSeleccionada = this.value;

  // FILTRO LOS MÉDICOS QUE TENGAN LA ESPECIALIDAD SELECCIONADA
  const medicosFiltrados = medicos.filter(medico => medico.especialidad === especialidadSeleccionada);

  // SI NO HAY MÉDICOS, MUESTRO UN MENSAJE
  if (medicosFiltrados.length === 0) {
    selectMedico.innerHTML = '<option>No hay médicos para esta especialidad</option>';
  } else {
    // SI HAY MÉDICOS, LOS AGREGO AL SELECT
    medicosFiltrados.forEach(medico => {
      selectMedico.innerHTML += `<option value="${medico.usuarioMedico}">${medico.nombre} ${medico.apellido}</option>`;
    });
  }
});

selectMedico.addEventListener('change', function() {
  // OBTENGO EL MÉDICO SELECCIONADO
  const medicoSeleccionado = medicos.find(medico => medico.usuarioMedico === this.value);

  // ESTABLEZCO LA ESPECIALIDAD DEL MÉDICO COMO EL VALOR DEL SELECT DE ESPECIALIDADES
  selectEspecialidad.value = medicoSeleccionado.especialidad;
});



// PARA VER TURNO
const verTurnos = (usuario) => {
  // OBTENGO LA LISTA DE TURNOS DEL STORAGE
  const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

  // FILTRO LOS TURNOS QUE CORRESPONDAN AL USUARIO
  const turnosUsuario = turnos.filter(turno => turno.usuarioMedico === usuario || turno.correoPaciente === usuario);

  // OBTENGO EL ELEMENTO DONDE VOY A AGREGAR LOS TURNOS
  const tablaTurnos = document.getElementById('turnosBody');

  // LIMPIO LA TABLA
  tablaTurnos.innerHTML = '';

  // SI NO HAY TURNOS, MUESTRO UN MENSAJE
  if (turnosUsuario.length === 0) {
    tablaTurnos.innerHTML = '<tr><td colspan="6">No tienes turnos asignados.</td></tr>';
  } else {
    // SI HAY TURNOS, LOS AGREGO A LA TABLA
    turnosUsuario.forEach(turno => {
    // BUSCO AL MEDICO QUE CORRESPONDA AL TURNO
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



