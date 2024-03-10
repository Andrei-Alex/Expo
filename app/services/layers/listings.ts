import apiClient from '../client';
import { IApiItemForSale } from './types';

const endPoint = '/listings';

const getListings = () => apiClient.get<IApiItemForSale[]>(endPoint);
const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price.toString());
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  //TODO: TO BE FIXED...
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
  return apiClient.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total)
  });
};

export default {
  getListings,
  addListing
};
