const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const generateIds = (min = 0, max = 1025) => {
  let idArray = [];

  for (let i = 0; i < 10; i++) {
    const randomNumber = generateRandomNumber(min, max);
    idArray.push(randomNumber);
  }

  return idArray;
};

const getPokemon = async () => {
  const idArr = generateIds();
  const promisesArr = [];

  idArr.map((id) => {
    const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    promisesArr.push(promise);
  })

  return await Promise.all(promisesArr);
}

const getTypes = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/type");
  return await response.json();
};

window.addEventListener("DOMContentLoaded", async () => {
  const typesResponse = await getTypes();
  const types = typesResponse["results"].map((result) => (result["name"]));

  console.log(types);

  const pokemonCardsContainer = document.querySelector(".pokemon-cards");
  const response = await getPokemon();

  
  response.map(async (item) => {
    const pokemon = await item.json();
    const pokemonName = pokemon["name"];
    const pokemonImage = pokemon["sprites"]["other"]["official-artwork"]["front_default"]
    const pokemonTypes = pokemon["types"].map((item) => {
      const type = item["type"]["name"];
      return type;
    });
    
    console.log(pokemon);
    
    pokemonCardsContainer.innerHTML += `
      <div class="pokemon-cards__card">
        <p class="pokemon-cards__card__title">${pokemonName}</p>
        <img class="pokemon-cards__card__image" src="${pokemonImage}" />
        <p class="pokemon-cards__card__types">${pokemonTypes}</p>
      </div>
    `;
  })

})