import apiClient from '../client';
import { IApiItemForSale } from './types';

const endPoint = '/listings';

const getListings = () => apiClient.get<IApiItemForSale[]>(endPoint);

export default {
  getListings
};
