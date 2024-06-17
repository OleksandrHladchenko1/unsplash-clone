import axios from 'axios';
import { client_id } from '../context';

export const getImageById = async (id) => {
  const { data } = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=${client_id}`);
  return data
};