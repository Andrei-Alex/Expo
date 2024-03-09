import apiClient from '../client';
import { IApiItemForSale } from './types';

const endPoint = '/listings';

const getListings = () => apiClient.get<IApiItemForSale[]>(endPoint);
const addListing = (listing) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) => {
    const file = new File([image], 'image' + index + '.jpeg', {
      type: 'image/jpeg'
    });
    data.append('images', file);
  });
  if (listing.location) {
    data.append('location', JSON.stringify(listing.location));
  }

  return apiClient.post(endPoint, data);
};

export default {
  getListings,
  addListing
};
