async function fetchUserData(userId) {
    try {
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const userData = await response.json();
        console.log(`Fetched user data for User ID ${userId}`);
        return userData;
      } else {
        console.error(`Error fetching user data for User ID ${userId}. Status Code: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching user data for User ID ${userId}:`, error.message);
      return null;
    }
  }

  async function fetchMultipleUsers(userIds) {
    try {

      const userPromises = userIds.map(userId => fetchUserData(userId));
      const usersData = await Promise.all(userPromises);

      console.log('Combined User Data:', usersData);
    } catch (error) {
      console.error('Error fetching multiple users:', error.message);
    }
  }


  const userIdsToFetch = [1, 2, 3, 4, 5];
  fetchMultipleUsers(userIdsToFetch);
