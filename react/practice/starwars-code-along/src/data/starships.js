export const getStarships = async () => {
  const response = await fetch("https://swapi.dev/api/starships");
  const data = await response.json();
  const cleanedData = data.results.map((starship) => {
    // {name, manufacturer, length} = ship
    // return {name, manufacturer, parseFloat(length)}

    return {
      name: starship.name,
      manufacturer: starship.manufacturer,
      length: parseFloat(starship.length.replace(",", "")),
    };
  });

  return cleanedData;
};
