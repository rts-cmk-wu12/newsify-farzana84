require('../../sass/styles.scss')
//const API_KEY = 'WS2sWpl8J2xj1BQb5e0KTdRgQqdlhNGO';
const API_KEY = 'MlTTn3vMLfdAE6nqruHnKOI2fioS97Ft'
//const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=yourkey';
const BASE_URL = 'https://api.nytimes.com/svc/';
const endpoints = {
   mostPopularByViews: 'mostpopular/v2/viewed/'

}

  async function fetchMostPopularByViews(days = 1) {
   const url = new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByViews);

   url.searchParams.set('api-key', API_KEY);//?api-key=yourkey    searchparams er age ?hoe

   const response = await fetch(url);
   const data = await response.json();

   return data;
}
module.exports = fetchMostPopularByViews;