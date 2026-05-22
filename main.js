const requestURL = '../json/characters.json';

async function fetchanimesJson() {
    const response = await fetch(requestURL);
    const animes = await response.json();
    return animes;
}

fetchanimesJson().then(animes => {
    const animeSection = document.getElementById('animeSection');

    for (let index = 0; index < animes.characters.length; index++) {

        let id = animes.characters[index].id;
        let title = animes.characters[index].name;
        let alias = animes.characters[index].alias;
        let obra = animes.characters[index].origin_work;
        let rol = animes.characters[index].role;
        let edad = animes.characters[index].personal_data.age;
        let estado = animes.characters[index].personal_data.status;
        let synopsis = animes.characters[index].description;
        

        let poster = animes.characters[index].image;
        if (poster === "") {
            poster = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400";
        }


        let habilidades = animes.characters[index].skills.join(', ');

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