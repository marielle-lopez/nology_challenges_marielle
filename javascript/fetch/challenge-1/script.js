const getJokes = async () => {
  const searchTerm = document.querySelector("#search").value;

  const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}&limit=30`, {
    headers: {
      "Accept": "application/json",
    }
  });

    const responseData = await response.json();
    return responseData;
  }


document.querySelector("button").addEventListener("click", async () => {
  const searchResultsContainer = document.querySelector("#searchResults");
  searchResultsContainer.innerHTML = "";
  const responseData = await getJokes();

  if (responseData.results.length === 0) {
    const textNode = document.createTextNode("No search results.");
    const elementNode = document.createElement('p');
    elementNode.append(textNode);
    searchResultsContainer.append(elementNode);
    return;
  }

  responseData.results.map((result) => {
    const textNode = document.createTextNode(result.joke);
    const elementNode = document.createElement('p');
    elementNode.append(textNode);
    searchResultsContainer.append(elementNode);
  });
});