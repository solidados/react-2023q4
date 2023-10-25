const url = 'https://swapi.dev/api/';

async function apiResponse() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default apiResponse;
