
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


// validacion de bootstrap: si falta algo no se envia, si esta todo bien se manda a W3Forms
const formulario = document.querySelector("#miFormulario");

formulario.addEventListener("submit", function (event) {

  if (!formulario.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  formulario.classList.add("was-validated");

});
