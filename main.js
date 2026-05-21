// Cambiado a 'character.json' para que coincida exactamente con tu archivo en inglés
const requestURL = '../json/character.json'; 

async function fetchMoviesJson() {
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    // Conectamos con el ID de tu index.html actual
    const animeSection = document.getElementById('animeSection');

    // Mantenemos tu bucle original apuntando a tu lista .personajes del JSON
    for (let index = 0; index < movies.personajes.length; index++) {

        // Extraemos los datos de cada personaje
        let title = movies.personajes[index].nombre;
        let alias = movies.personajes[index].alias;
        let obra = movies.personajes[index].obra_origen;
        let rol = movies.personajes[index].rol;
        let edad = movies.personajes[index].datos_personales.edad;
        let estado = movies.personajes[index].datos_personales.estado;
        let synopsis = movies.personajes[index].descripcion;
        
        // Leemos la propiedad 'imagen' donde pusiste tu link de Cloudinary
        let poster = movies.personajes[index].imagen;
        
        // Si el campo está vacío "", ponemos una imagen por defecto para que no salga rota
        if (poster === "") {
            poster = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400";
        }

        // Convertimos el array de habilidades en un texto separado por comas
        let habilidades = movies.personajes[index].habilidades.join(', ');

        // Inyectamos la tarjeta en tu contenedor 'animeSection'
        animeSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${poster}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <span class="badge bg-danger float-end">${rol}</span>
                <h5 class="card-title text-primary mb-1">${title}</h5>
                <p class="card-text text-muted small"><em>"${alias}"</em></p>
                
                <p class="card-text mb-2">
                    <strong>Obra:</strong> ${obra}<br>
                    <strong>Edad:</strong> ${edad} (${estado})
                </p>
                
                <h6 class="card-title h6 small mb-2"><strong>Habilidades:</strong></h6>
                <p class="card-text small text-secondary mb-3">${habilidades}</p>
                
                <p class="card-text small">${synopsis}</p>
            </div>
        </div>
        `;
    }
});