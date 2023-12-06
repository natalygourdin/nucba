    let nombre = document.querySelector('.form__nombre');
    let  email = document.querySelector('.form__email');
     let error = document.querySelector('.error-message')

     let mensajeErrorNombre = 'Por favor escriba su nombre ';
     let mensajeErrorEmail = 'Por favor escriba su email';
     
   // Agregar eventos de blur para la validación
   nombre.addEventListener('blur', function() {
    validarCampo(nombre, error, mensajeErrorNombre);
  });

  email.addEventListener('blur', function() {
    validarCampo(email, error, mensajeErrorEmail);
  });


   // Función para validar 
   function validarCampo(input, errorContainer, mensajeError) {
    let valor = input.value.trim();
    if (valor === '') {
      input.classList.add('error');
      errorContainer.innerHTML = mensajeError;
    } else {
      input.classList.remove('error');
      errorContainer.innerHTML = '';
    }
  }
  document.getElementById('contactForm').addEventListener('submit', function(event) {

  validarCampo(nombre, error,mensajeErrorNombre,)  
  validarCampo(email, error,mensajeErrorEmail,)
    // Mostrar mensajes de error si los hay
    if (nombre.classList.contains('error') || email.classList.contains('error')) {
        event.preventDefault(); // Evitar que el formulario se envíe si hay errores
      }
    });
