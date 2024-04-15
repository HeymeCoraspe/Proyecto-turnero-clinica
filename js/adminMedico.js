// Obteniendo el nombre de usuario del médico que ha iniciado sesión
const usuarioMedico = localStorage.getItem('usuarioMedico');

// Obteniendo la lista de médicos del localStorage
const medicos = JSON.parse(localStorage.getItem('medicos')) || [];

// Buscando al médico que ha iniciado sesión
const medico = medicos.find(m => m.usuarioMedico === usuarioMedico);

const displayDoctorInfo = (medico) => {
  const doctorInfoContainer = document.getElementById('doctorInfo');
  doctorInfoContainer.innerHTML = `
    <div><strong>Nombre:</strong> ${medico.nombre} ${medico.apellido}</div>
    <div><strong>Correo:</strong> ${medico.correo}</div>
    <div><strong>Teléfono:</strong> ${medico.telefono}</div>
    <div><strong>Especialidad:</strong> ${medico.especialidad}</div>
  `;
};

// Mostrando la información del médico
if (medico) {
  displayDoctorInfo(medico);
} else {
  console.log('No se encontró al médico');
}



// PARA VER TURNO
const verTurnos = () => {
  // OBTENGO EL NOMBRE DE USUARIO DEL MÉDICO QUE HA INICIADO SESIÓN
  const usuarioMedico = localStorage.getItem('usuarioMedico');

  // OBTENGO LA LISTA DE TURNOS DEL STORAGE
  const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

  // OBTENGO LA LISTA DE PACIENTES DEL STORAGE
  const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

  // FILTRO LOS TURNOS QUE CORRESPONDAN AL MÉDICO
  const turnosMedico = turnos.filter(turno => turno.usuarioMedico === usuarioMedico);

  // OBTENGO EL ELEMENTO DONDE VOY A AGREGAR LOS TURNOS
  const tablaTurnos = document.getElementById('turnosBody');

  // LIMPIO LA TABLA
  tablaTurnos.innerHTML = '';

  // SI NO HAY TURNOS, MUESTRO UN MENSAJE
  if (turnosMedico.length === 0) {
    tablaTurnos.innerHTML = '<tr><td colspan="6">No tienes turnos asignados.</td></tr>';
  } else {
    // SI HAY TURNOS, LOS AGREGO A LA TABLA
    turnosMedico.forEach(turno => {
      // BUSCO AL PACIENTE QUE CORRESPONDA AL TURNO
      const paciente = pacientes.find(p => p.correo === turno.correoPaciente);
      const nombrePaciente = paciente ? `${paciente.nombre} ${paciente.apellido}` : 'Paciente no encontrado';

      tablaTurnos.innerHTML += `<tr>
        <td>${turno.fechaTurno}</td>
        <td>${turno.hora}</td>
        <td>${turno.correoPaciente}</td>
        <td>${nombrePaciente}</td>
        <td>${turno.obraSocial}</td>
      </tr>`;
    });
  }
}

// LLAMO A LA FUNCIÓN PARA MOSTRAR LOS TURNOS
verTurnos();
