document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const pokemonCards = document.querySelectorAll('.pokemon-card');
    const container = document.querySelector('.container');

    // Sample Pokémon data with extended details
    const pokemonData = {
        Bulbasaur: { id: 1, type: 'Grass/Poison', hp: 45, attack: 49, defense: 49, ability: 'Overgrow' },
        Ivysaur: { id: 2, type: 'Grass/Poison', hp: 60, attack: 62, defense: 63, ability: 'Overgrow' },
        Venusaur: { id: 3, type: 'Grass/Poison', hp: 80, attack: 82, defense: 83, ability: 'Overgrow' },
        Charmander: { id: 4, type: 'Fire', hp: 39, attack: 52, defense: 43, ability: 'Blaze' },
        Charmeleon: { id: 5, type: 'Fire', hp: 58, attack: 64, defense: 58, ability: 'Blaze' },
        Charizard: { id: 6, type: 'Fire/Flying', hp: 78, attack: 84, defense: 78, ability: 'Blaze' },
        Squirtle: { id: 7, type: 'Water', hp: 44, attack: 48, defense: 65, ability: 'Torrent' },
        Wartortle: { id: 8, type: 'Water', hp: 59, attack: 63, defense: 80, ability: 'Torrent' },
        Blastoise: { id: 9, type: 'Water', hp: 79, attack: 83, defense: 100, ability: 'Torrent' },
        Caterpie: { id: 10, type: 'Bug', hp: 45, attack: 30, defense: 35, ability: 'Shield Dust' },
        Metapod: { id: 11, type: 'Bug', hp: 50, attack: 20, defense: 55, ability: 'Shed Skin' },
        Butterfree: { id: 12, type: 'Bug/Flying', hp: 60, attack: 45, defense: 50, ability: 'Compound Eyes' },
    };

    // Render selected Pokémon
    const renderSelectedPokemon = (pokemonName, pokemonImg) => {
        // O'ng tomondagi containerni yaratamiz yoki topamiz
        let selectedContainer = document.getElementById('selectedPokemon');
        if (!selectedContainer) {
            selectedContainer = document.createElement('div');
            selectedContainer.id = 'selectedPokemon';
            selectedContainer.className = 'selected-pokemon';
            container.appendChild(selectedContainer);
        }

        // Pokémon ma'lumotlari
        const { id, type, hp, attack, defense, ability } = pokemonData[pokemonName];

        // Tanlangan Pokémonni render qilish
        selectedContainer.innerHTML = `
            <h2>${pokemonName}</h2>
            <img src="${pokemonImg}" alt="${pokemonName}">
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>HP:</strong> ${hp}</p>
            <p><strong>Attack:</strong> ${attack}</p>
            <p><strong>Defense:</strong> ${defense}</p>
            <p><strong>Ability:</strong> ${ability}</p>
            <div class="button-group">
                <button class="info-button">More Info</button>
                <button class="battle-button">Battle</button>
            </div>
        `;
    };

    // Add event listener to all Pokémon cards
    pokemonCards.forEach(card => {
        card.addEventListener('click', () => {
            const pokemonName = card.querySelector('p').textContent;
            const pokemonImg = card.querySelector('img').src;

            renderSelectedPokemon(pokemonName, pokemonImg);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        pokemonCards.forEach(card => {
            const pokemonName = card.querySelector('p').textContent.toLowerCase();
            if (pokemonName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
