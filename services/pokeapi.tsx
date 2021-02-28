
function getPokemonsFromApi() {
    return fetch('https://pokeapi.co/api/v2/')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.results;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getPokemonsFromApiAsync = async () => {
    try {
      let response = await fetch(
        'https://pokeapi.co/api/v2/'
      );
      let json = await response.json();
      return json.results;
    } catch (error) {
      console.error(error);
    }
  };

  export {getPokemonsFromApi, getPokemonsFromApiAsync}