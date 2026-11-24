
let contenedor = document.querySelector("#lista-estaciones");

// traemos las estaciones del json y armamos una tarjeta por cada una
fetch("js/estaciones.json")
  .then(respuesta => respuesta.json())
  .then(estaciones => {
    estaciones.forEach(estacion => {
      contenedor.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
          <div class="estacion border border-secondary p-4 h-100 d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-4">
              <i class="bi ${estacion.icono}"></i>
              <span class="text-secondary">${estacion.numero}</span>
            </div>
            <h3>${estacion.nombre}</h3>
            <p class="text-secondary">${estacion.descripcion}</p>
            <p class="medida fw-bold mt-auto mb-0">${estacion.medida}</p>
          </div>
        </div>
      `;
    });
  });


// validacion del formulario del modal
const formulario = document.querySelector("#miFormulario");
const mensajeGracias = document.querySelector("#mensajeGracias");

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  if (!formulario.checkValidity()) {
    event.stopPropagation();
    formulario.classList.add("was-validated");
    return;
  }

  formulario.classList.add("was-validated");

  formulario.classList.add("d-none");
  mensajeGracias.classList.remove("d-none");

});
