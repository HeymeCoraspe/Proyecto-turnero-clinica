const doctor = {
    nombre: localStorage.getItem('nombre'),
    apellido: localStorage.getItem('apellido'),
    correo: localStorage.getItem('correo'),
    telefono: localStorage.getItem('telefono'),
    especialidad: localStorage.getItem('especialidad'),
};

function displayDoctorInfo(doctor) {
  const doctorInfoContainer = document.getElementById('doctorInfo');
  doctorInfoContainer.innerHTML = `
    <div><strong>Nombre:</strong> ${doctor.nombre} ${doctor.apellido}</div>
    <div><strong>Correo:</strong> ${doctor.correo}</div>
    <div><strong>Teléfono:</strong> ${doctor.telefono}</div>
    <div><strong>Especialidad:</strong> ${doctor.especialidad}</div>
  `;
}

// MOSTRAR TURNO
const turnosBody = document.getElementById('turnosBody');
const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

function mostrarTurnos() {
  turnosBody.innerHTML = '';

  pacientes.forEach((paciente, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${paciente.fechaTurno}</td>
      <td>${paciente.hora}</td>
      <td>${paciente.correo}</td>
      <td>${paciente.especialidad}</td>
      <td>${paciente.doctor}</td>
      <td>${paciente.obraSocial}</td>
    `;
    turnosBody.appendChild(fila);
  });
}

displayDoctorInfo(doctor);
mostrarTurnos(); 