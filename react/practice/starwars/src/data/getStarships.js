export const fetchStarshipsData = async () => {
  const response = await fetch("https://swapi.dev/api/starships");
  const data = await response.json();

  const starshipsData = data.results.map((starship) => {
    return {
      name: starship.name,
      manufacturer: starship.manufacturer,
      length: parseFloat(starship.length),
    };
  });

  return starshipsData;
};
