console.log("Holaa 👋🏼, esta 🥁🥁🥁 es la tercera pre-entrega");
//Este formulario para realizar la reserva
document.addEventListener('DOMContentLoaded', function() {
  const formReserva = document.querySelector('#formReserva');
  const inputNombre = document.querySelector('#nameInput');
  const inputEdad = document.querySelector('#edadInput');
  const inputFecha = document.querySelector('#fechaInput');
  const inputHorario = document.querySelector('#horarioInput');
  const inputTelefono = document.querySelector('#phone');
  const inputPersona = document.querySelector('#persona');

  function restoreFormValues() {
    const reservaGuardada = localStorage.getItem('reserva');
    if (reservaGuardada) {
      const reserva = JSON.parse(reservaGuardada);
      inputNombre.value = reserva.nombre;
      inputEdad.value = reserva.edad;
      inputFecha.value = reserva.fecha;
      inputHorario.value = reserva.horario;
      inputTelefono.value = reserva.telefono;
      inputPersona.value = reserva.persona;
    }
  }

  restoreFormValues();

  formReserva.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    const fecha = inputFecha.value;
    const horario = inputHorario.value;
    const telefono = inputTelefono.value;
    const persona = inputPersona.value;
    const reserva = {
      nombre,
      edad,
      fecha,
      horario,
      telefono,
      persona
    };
    localStorage.setItem('reserva', JSON.stringify(reserva));
    formReserva.reset();
    restoreFormValues();
  });

  const formResetBtn = document.querySelector('#formReset');
  formResetBtn.addEventListener('click', function() {
    const myForm = document.querySelector('#formReserva');
    myForm.reset();
    localStorage.removeItem('reserva');
  });
});
