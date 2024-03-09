import { ApiResponse } from 'apisauce';

export interface UseApiOptions<T> {
  apiFunc: () => Promise<ApiResponse<T>>;
  initialData?: T;
}
