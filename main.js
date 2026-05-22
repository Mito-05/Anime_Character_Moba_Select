const requestURL = '../json/db.json';
let allCharacters = []; 
async function fetchanimesJson() {
    const response = await fetch(requestURL);
    const animes = await response.json();
    return animes;
}


function displayCharacters(charactersList) {
    const animeSection = document.getElementById('animeSection');
    animeSection.innerHTML = ""; 

    for (let index = 0; index < charactersList.length; index++) {
        let title = charactersList[index].name;
        let alias = charactersList[index].alias;
        let work = charactersList[index].origin_work;
        let role = charactersList[index].role;
        let age = charactersList[index].personal_data.age;
        let status = charactersList[index].personal_data.status;
        let synopsis = charactersList[index].description;
        
        let poster = charactersList[index].image;
        if (poster === "") {
            poster = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400";
        }

        let skills = charactersList[index].skills.join(', ');

        animeSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${poster}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <span class="badge bg-danger float-end">${role}</span>
                <h5 class="card-title text-primary mb-1">${title}</h5>
                <p class="card-text text-muted small mb-2"><em>"${alias}"</em></p>
                
                <p class="card-text mb-2 small">
                    <strong>work:</strong> ${work}<br>
                    <strong>age:</strong> ${age} años (${status})
                </p>
                
                <h6 class="card-title h6 small mb-1"><strong>skills:</strong></h6>
                <p class="card-text small text-secondary mb-3">${skills}</p>
                
                <p class="card-text small">${synopsis}</p>
            </div>
        </div>
        `;
    }
}


function filterBy(value, property) {

    const buttons = document.querySelectorAll('#filterContainer .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');


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


fetchanimesJson().then(animes => {
    allCharacters = animes.characters;
    displayCharacters(allCharacters); 
});