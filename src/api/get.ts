const get = async (url: string, fullUrl = false) => {
    try {
      const response = await fetch(fullUrl ? url :  "https://swapi.dev/api/" + url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  
  export default get