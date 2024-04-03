const paciente = {
    nombre: localStorage.getItem('nombre'),
    apellido: localStorage.getItem('apellido'),
    correo: localStorage.getItem('correo'),
    telefono: localStorage.getItem('telefono'),
    obraSocial: localStorage.getItem('obraSocial'),
  };

  displayPacienteInfo(paciente);

  function displayPacienteInfo(paciente) {
    const pacienteInfoContainer = document.getElementById('pacienteInfo');
    pacienteInfoContainer.innerHTML = `
      <div><strong>Nombre:</strong> ${paciente.nombre} ${paciente.apellido}</div>
      <div><strong>Correo:</strong> ${paciente.correo}</div>
      <div><strong>Teléfono:</strong> ${paciente.telefono}</div>
      <div><strong>Obra social:</strong> ${paciente.obraSocial}</div>
    `;
  }

  // PARA CREAR TURNO
  const form = document.getElementById('formularioTurno'); 

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // ESTO EVITA QUE EL FORM SE MANDE AUTOMATICO

    // OBTENGO LOS DATOS DEL FORM
    const formData = new FormData(form);
    const paciente = {
      fechaTurno: formData.get('fechaTurno'),
      hora: formData.get('hora'),
      correo: formData.get('correo'),
      especialidad: formData.get('especialidad'),
      doctor: formData.get('doctor'),
      obraSocial: formData.get('obraSocial')
    };

    // ACTUALIZAR LA LISTA DEL STORAGE -- PREGUNTAR AL PROFE
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.push(paciente);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    alert('Paciente registrado correctamente.');

    // ESTO SIRVE PARA LIMPIAR EL FORMULARIO
    form.reset();
  });


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

  mostrarTurnos();
