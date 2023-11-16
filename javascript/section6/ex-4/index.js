// main.js
const axios = require('axios');

// Function to fetch data from a public API
async function fetchDataFromAPI(apiUrl) {
  try {
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error fetching data. Status Code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/15';
fetchDataFromAPI(apiUrl)
  .then(data => {
    if (data) {
      console.log('Data from the API:', data);
    }
  })
  .catch(error => console.error('Error:', error));
