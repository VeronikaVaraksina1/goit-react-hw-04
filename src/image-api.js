import axios from 'axios';

export async function fetchData(searchQuery) {
  axios.defaults.baseURL = 'https://api.unsplash.com/v1';

  const response = await axios.get('/search/photos', {
    params: {
      query: searchQuery,
      per_page: 10,
      orientation: 'landscape',
    },
  });
  return response.data.results;
}
