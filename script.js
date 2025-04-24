document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const pokemonContainer = document.getElementById("pokemon-container");

    async function fetchPokemon(name) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const data = await response.json();
            displayPokemon(data);
        } catch (error) {
            pokemonContainer.innerHTML = "<p>Pokémon no encontrado</p>";
        }
    }

    function displayPokemon(pokemon) {
        pokemonContainer.innerHTML = `
            <div class="pokemon-card">
                <h3>${pokemon.name}</h3>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p>Tipo: ${pokemon.types.map(type => type.type.name).join(", ")}</p>
            </div>
        `;
    }

    searchInput.addEventListener("input", () => {
        if (searchInput.value.length > 2) {
            fetchPokemon(searchInput.value);
        }
    });

    function mostrarDatos() {
        alert("Aquí irá la información del usuario.");
    }

    function mostrarMios() {
        alert("Aquí se mostrarán tus Pokémon guardados.");
    }

    function mostrarAleatorio() {
        const randomId = Math.floor(Math.random() * 100) + 1;
        fetchPokemon(randomId);
    }

    function mostrarFavoritos() {
        alert("Aquí se mostrarán tus favoritos.");
    }

    function mostrarLista() {
        alert("Aquí se mostrará la lista completa de Pokémon.");
    }
});
