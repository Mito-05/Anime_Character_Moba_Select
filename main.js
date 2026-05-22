const requestURL = '../json/characters.json';
let allCharacters = []; // Guardará todos los personajes de forma global

async function fetchanimesJson() {
    const response = await fetch(requestURL);
    const animes = await response.json();
    return animes;
}

// Función encargada de pintar las tarjetas en el HTML
function displayCharacters(charactersList) {
    const animeSection = document.getElementById('animeSection');
    animeSection.innerHTML = ""; // Limpiamos la sección antes de pintar

    for (let index = 0; index < charactersList.length; index++) {
        let title = charactersList[index].name;
        let alias = charactersList[index].alias;
        let obra = charactersList[index].origin_work;
        let rol = charactersList[index].role;
        let edad = charactersList[index].personal_data.age;
        let estado = charactersList[index].personal_data.status;
        let synopsis = charactersList[index].description;
        
        let poster = charactersList[index].image;
        if (poster === "") {
            poster = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400";
        }

        let habilidades = charactersList[index].skills.join(', ');

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
}

// FUNCIÓN DE FILTRADO AVANZADA
function filterBy(value, property) {
    // 1. Manejo visual de botones activos de Bootstrap
    const buttons = document.querySelectorAll('#filterContainer .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Aplicar filtro dinámico basado en la propiedad escogida
    if (value === 'all') {
        displayCharacters(allCharacters);
    } else {
        const filtered = allCharacters.filter(character => {
            // Evaluamos dinámicamente si filtramos por 'origin_work' o por 'role'
            return character[property] === value;
        });
        displayCharacters(filtered);
    }
}

// Carga inicial de la aplicación
fetchanimesJson().then(animes => {
    allCharacters = animes.characters; // Almacenamos los datos originales
    displayCharacters(allCharacters);  // Mostramos todos al arrancar
});