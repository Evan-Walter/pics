import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FkefCcB6TpHI654RjCohiAAQmoyI3gSxgHMK-w9vLWk',
  },
});
