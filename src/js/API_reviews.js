import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api',
});

export async function getReviews() {
  const res = await axios.get('/reviews');
  return res.data;
}

export async function createRequest(request) {
  const res = await axios.post('/requests', request);
  return res.data;
}
