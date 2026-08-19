// 1. Buscamos todos los botones y enlaces con aspecto de botón en la página
const botones = document.querySelectorAll(
  '.btn-accion, .btn-regalo, .btn-comprar, .btn-cotizacion, .btn-e1, .btn-taller, .btn-enviar, .btn-wsp-flotante'
);

// 2. Le aplicamos a cada uno la animación con JavaScript
botones.forEach((boton) => {
  // Le damos la transición suave inicial
  boton.style.transition = 'transform 0.3s ease, filter 0.3s ease';

  // Cuando el mouse ENTRA en el botón: se agranda y se ilumina
  boton.addEventListener('mouseenter', () => {
    boton.style.transform = 'scale(1.06)';
    boton.style.filter = 'brightness(1.15)';
    boton.style.cursor = 'pointer';
  });

  // Cuando el mouse SALE del botón: vuelve a su estado normal
  boton.addEventListener('mouseleave', () => {
    boton.style.transform = 'scale(1)';
    boton.style.filter = 'brightness(1)';
  });
});






// Recortar texto y generar "Leer más" 100% desde JavaScript (sin tocar el HTML)
const tarjetasEbooks = document.querySelectorAll('.ebooks');

tarjetasEbooks.forEach((tarjeta) => {
  const parrafo = tarjeta.querySelector('p');
  if (!parrafo) return;

  const textoCompleto = parrafo.innerHTML;
  const longitudCorte = 120; // Cantidad de caracteres visibles al inicio

  // Si el texto es largo, lo dividimos
  if (textoCompleto.length > longitudCorte) {
    const textoVisible = textoCompleto.substring(0, longitudCorte);
    const textoOculto = textoCompleto.substring(longitudCorte);

    // Reescribimos el contenido con JS
    parrafo.innerHTML = `${textoVisible}<span class="puntos">...</span><span class="resto-texto" style="display: none;">${textoOculto}</span>`;

    // Creamos el botón "Leer más" con JS
    const btnLeerMas = document.createElement('button');
    btnLeerMas.textContent = 'Leer más';
    btnLeerMas.style.cssText =
      'background: none; border: none; color: #5a4bda; font-weight: bold; cursor: pointer; display: block; margin: 8px 0; font-family: inherit; font-size: 14px;';

    // Funcionalidad al hacer clic
    btnLeerMas.addEventListener('click', () => {
      const resto = tarjeta.querySelector('.resto-texto');
      const puntos = tarjeta.querySelector('.puntos');

      if (resto.style.display === 'none') {
        resto.style.display = 'inline';
        puntos.style.display = 'none';
        btnLeerMas.textContent = 'Leer menos';
      } else {
        resto.style.display = 'none';
        puntos.style.display = 'inline';
        btnLeerMas.textContent = 'Leer más';
      }
    });

    // Insertamos el botón justo después del párrafo
    parrafo.insertAdjacentElement('afterend', btnLeerMas);
  }
});





// Validación del formulario de contacto
const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('.btn-enviar');

if (btnEnviar && formulario) {
    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault(); // Evita recargas si estuviera dentro de un form

        // Capturo los campos por sus clases/etiquetas existentes
        const inputNombre = formulario.querySelector('input[type="text"]');
        const inputEmail = formulario.querySelector('input[type="email"]');
        const inputConsulta = formulario.querySelector('textarea');

        const nombre = inputNombre ? inputNombre.value.trim() : '';
        const email = inputEmail ? inputEmail.value.trim() : '';
        const consulta = inputConsulta ? inputConsulta.value.trim() : '';

        // Validación simple de email adentro de tu if existente
        if (!email.includes('@') || !email.includes('.')) {
            alert('⚠️ Por favor, ingresá un correo electrónico válido.');
        return;
        }

        // Verificamos si falta completar algún campo
        if (nombre === '' || email === '' || consulta === '') {
            alert('⚠️ Todos los datos son obligatorios. Por favor, completá todos los campos.');
        } else {
            alert(`¡Gracias ${nombre}! En breve nos ponemos en contacto con vos.`);

            // Limpiamos los campos después de enviar
            if (inputNombre) inputNombre.value = '';
            if (inputEmail) inputEmail.value = '';
            if (inputConsulta) inputConsulta.value = '';
        }
    });
}




// Cerrar menú hamburguesa al hacer clic en cualquier enlace del menú
const linksNav = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const btnHamburguesa = document.querySelector('.hamburguesa');

linksNav.forEach(link => {
    link.addEventListener('click', () => {
        if (nav && btnHamburguesa) {
            nav.classList.remove('abierto');
            btnHamburguesa.classList.remove('activo');
        }
    });
});





