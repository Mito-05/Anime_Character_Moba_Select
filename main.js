const requestURL = '../json/characters.json';

async function fetchMoviesJson() {
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    // Obtenemos el contenedor una sola vez fuera del bucle para optimizar rendimiento
    const animeSection = document.getElementById('animeSection');

    // Bucle mapeado exactamente sobre la clave "characters" de tu JSON
    for (let index = 0; index < movies.characters.length; index++) {

        let id = movies.characters[index].id;
        let title = movies.characters[index].name;
        let alias = movies.characters[index].alias;
        let obra = movies.characters[index].origin_work;
        let rol = movies.characters[index].role;
        let edad = movies.characters[index].personal_data.age;
        let estado = movies.characters[index].personal_data.status;
        let synopsis = movies.characters[index].description;
        
        // Controlamos si la propiedad 'image' está vacía
        let poster = movies.characters[index].image;
        if (poster === "") {
            poster = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400";
        }

        // Convertimos el array "skills" en una cadena de texto separada por comas
        let habilidades = movies.characters[index].skills.join(', ');

        // Inyectamos la tarjeta en el HTML
        animeSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${poster}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <span class="badge bg-danger float-end">${rol}</span>
                <h5 class="card-title text-primary mb-1">${title}</h5>
                <p class="card-text text-muted small mb-2"><em>"${alias}"</em></p>
                
                <p class="card-text mb-2 small">
                    <strong>Obra:</strong> ${obra}<br>
                    <strong>Edad:</strong> ${edad} años (${estado})
                </p>
                
                <h6 class="card-title h6 small mb-1"><strong>Habilidades:</strong></h6>
                <p class="card-text small text-secondary mb-3">${habilidades}</p>
                
                <p class="card-text small">${synopsis}</p>
            </div>
        </div>
        `;
    }
});