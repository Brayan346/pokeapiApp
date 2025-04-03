async function getPokemon() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Pokémon no encontrado");
        const data = await response.json();
        
        document.getElementById("pokemonInfo").innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
            <p>Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
        `;
    } catch (error) {
        document.getElementById("pokemonInfo").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
