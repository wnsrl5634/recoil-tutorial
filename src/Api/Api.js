import axios from 'axios';

export const fetchUserList = async () => {
  return await axios.get('https://60b9e18480400f00177b71d0.mockapi.io/users');
};

export const fetchError = async () => {
  return await axios.get('https://60b9e18480400f00177b71d0.mockapi.io/us');
};

export const fetchUserWithId = async (query) => {
  const { userId } = query;
  return await axios.get(
    `https://60b9e18480400f00177b71d0.mockapi.io/users/${userId}`
  );
};

export const fetchArticle = async (query) => {
  const { userId, massage, voltage } = query;
  return await axios.get(
    `https://60b9e18480400f00177b71d0.mockapi.io/users/${userId}/articles`
  );
};
