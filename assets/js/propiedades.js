const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo esta ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Subird, CA 45678",
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,

    },

    {
        nombre: "Casa familiar con jardín amplio",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        descripcion: "Casa ideal para familias con niños, cuenta con amplio jardín y patio trasero",
        ubicacion: "789 Family Street, Green Town, CA 22222",
        habitaciones: 3,
        baños: 2,
        costo: 3400,
        smoke: true,
        pets: true,  
    },

    {
        nombre: "Penthouse con vista al mar ",
        src: "https://images.adsttc.com/media/images/5a58/a650/f197/cc1f/8600/0173/medium_jpg/S3_CDS--5.jpg?1515759173",
        descripcion: "Increible penhouse con terraza y vista panorámica al océano",
        ubicacion: "1 Ocean View, Coast City, CA 99999",
        habitaciones: 3,
        baños: 3,
        costo: 6000,
        smoke: false,
        pets: true,  
    },

    {
       nombre: "Departamento moderno en el centro",
        src: "https://constructorarupanco.com/wp-content/uploads/2021/08/Stuio-SDGII_01.jpg",
        descripcion: "Moderno departamento con acceso a tiendas, restaurantes y transporte público",
        ubicacion: "21 Santiago Center, Road City, CA 333939",
        habitaciones: 2,
        baños: 1,
        costo: 2300,
        smoke: false,
        pets: true,    
    }

]

const propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
        ubicacion: "123 Main Street, Anytown, CA 91234 ",
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true,

    },

    {
        nombre: "Estudio moderno para una persona",
        src: "https://www.viacelere.com/wp-content/uploads/2024/03/Diferencia-entre-apartamento_estudio_img-destacada-1280x720.jpg",
        descripcion: "Estudio compacto pero funcional, ideal para estudiantes o trabajadores",
        ubicacion: "Bellas artes ST, UTtomed, CA 2333",
        habitaciones: 1,
        baños: 1,
        costo: 1300,
        smoke: false,
        pets: false,  
    },

    {
        nombre: "Casa de campo en zona tranquila ",
        src: "https://revista-lagunas.s3.us-east-2.amazonaws.com/tiny/61ba3a9b60f202e4fea177299.jpg",
        descripcion: "Relájate en esta casa de campo rodeada de naturaleza",
        ubicacion: "El Alamó 21, Talca, CA 09990",
        habitaciones: 3,
        baños: 2,
        costo: 1800,
        smoke: true,
        pets: true,  
    },

     {
        nombre: "Condominio con amenities premium ",
        src: "https://www.selvacorealty.com/fotos_propiedades/3317/1-departamento-venta-pre-construccion-nauma-interlomas-estado-de-mexico-pre-construction-condo-for-sale-20f8.jpg/800x500/",
        descripcion: "Incluye gimnasio, piscina y seguridad 24/7",
        ubicacion: "555 Lux blvd, metropolis, CA 10101",
        habitaciones: 2,
        baños: 2,
        costo: 2500,
        smoke: false,
        pets: false,  
    }


]


function mostrarPropiedades(propiedades, contenedorID, cantidad){
    const contenedor = document.getElementById(contenedorID);
    contenedor.innerHTML = '';


    propiedades.slice(0,cantidad).forEach((prop) => {
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
        <div class="card">
         <img src="${prop.src}" alt="${prop.nombre}" class="card-img-top" />
         <div class="card-body">
           <h5>${prop.nombre}</h5>
           <p>${prop.descripcion}</p>
           <p><b>Ubicación:</b> ${prop.ubicacion}</p>
           <p><b>Habitaciones:</b> ${prop.habitaciones}</p>
           <p><b>Precio:</b> $${prop.costo.toLocaleString()}</p>
         ${prop.smoke
            ? ` <p class="text-success"><i class="fa-solid fa-smoking"></i> Permitido fumar </p> `
            : ` <p class="text-danger"><i class="fa-solid fa-smoking-ban"></i> No se permite fumar </p> `
            
          }

          ${prop.pets
             ? ` <p class="text-success"><i class="fa-solid fa-paw"></i> Mascotas permitidas </p> `
             : ` <p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas </p> `
          }
          </div>
          </div>
          </div> `;

});

}

mostrarPropiedades(propiedades_venta, 'propiedades_venta', 3);
mostrarPropiedades(propiedades_alquiler, 'propiedades_alquiler', 3);