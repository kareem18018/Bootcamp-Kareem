async function fetchUserData(userId) {
    try {
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const userData = await response.json();

        console.log('User Data:', userData);
      } else {
        console.error(`Error fetching user data. Status Code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }

  fetchUserData('10');
