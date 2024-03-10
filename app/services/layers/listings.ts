import apiClient from '../client';
import { IApiItemForSale } from './types';

const endPoint = '/listings';

const getListings = () => apiClient.get<IApiItemForSale[]>(endPoint);
const addListing = (listing) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price.toString());
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  //TODO: FIX
  // listing.images.forEach((image, index) => {
  // data.append('images', {
  //   name: 'image' + index,
  //   type: 'image/jpeg',
  //   uri: image
  // });
  // });

  if (listing.location) {
    data.append('location', JSON.stringify(listing.location));
  }
  return apiClient.post(endPoint, data);
};

export default {
  getListings,
  addListing
};
