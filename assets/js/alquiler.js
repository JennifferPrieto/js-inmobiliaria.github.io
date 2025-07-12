const contenedorAlquiler = document.querySelector("#contenedor_alquiler");
let cardsHTML = "";

propiedades_alquiler.forEach((propiedad) => {
   cardsHTML += `  
     <div class="col-md-4 mb-4">
       <div class="card h-100">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fa-solid fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fa-solid fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fa-solid fa-bath"></i> ${propiedad.baños} Baños</p>
          <p><i class="fa-solid fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${propiedad.smoke
            ? ` <p class="text-success"><i class="fa-solid fa-smoking"></i> Permitido fumar </p> `
            : ` <p class="text-danger"><i class="fa-solid fa-smoking-ban"></i> No se permite fumar </p> `
            
          }

          ${propiedad.pets
             ? ` <p class="text-success"><i class="fa-solid fa-paw"></i> Mascotas permitidas </p> `
            : ` <p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas </p> `
          }
        </div>
        </div>
        </div>
        `;
        


});

  contenedorAlquiler.innerHTML = cardsHTML;
