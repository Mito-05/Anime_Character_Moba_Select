// Asegúrate de que tu archivo JSON se llame exactamente "personajes.json" y esté en la carpeta "json"
const requestURL = '../json/personajes.json'; 

async function fetchPersonajesJson() {
    const response = await fetch(requestURL);
    const datos = await response.json();
    return datos;
}

fetchPersonajesJson().then(datos => {
    const section = document.getElementById('animeSection');

    for (let index = 0; index < datos.personajes.length; index++) {
        let p = datos.personajes[index];

        // Mapeamos el array de habilidades a etiquetas visuales (badges) de Bootstrap
        let habilidadesBadges = p.habilidades
            .map(h => `<span class="badge bg-secondary me-1 mb-1">${h}</span>`)
            .join('');

        // Colocamos una imagen por defecto dinámica basada en el nombre del personaje para que la tarjeta no quede vacía
        let imagenPlaceholder = `https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=60`;

        section.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${imagenPlaceholder}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <span class="badge bg-danger float-end">${p.rol}</span>
                    <h5 class="card-title text-primary mb-1">${p.nombre}</h5>
                    <p class="card-text text-muted small mb-3"><em>"${p.alias}"</em></p>
                    
                    <p class="card-text mb-2 small">
                        <strong>Obra:</strong> ${p.obra_origen}<br>
                        <strong>Edad:</strong> ${p.datos_personales.edad} (${p.datos_personales.estado})
                    </p>
                    
                    <hr class="my-2 text-secondary">
                    
                    <p class="card-text small mb-3">
                        <strong>Habilidades:</strong><br>
                        ${habilidadesBadges}
                    </p>
                    
                    <p class="card-text small text-dark">${p.descripcion}</p>
                </div>
                
                <div class="mt-3 pt-2 border-top text-muted xx-small">
                    Debut: Manga ${p.debut.manga} / Anime ${p.debut.anime}
                </div>
            </div>
        </div>
        `;
    }
}).catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
});