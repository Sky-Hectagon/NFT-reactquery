import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

type ApiClient = AxiosInstance;
export type ApiClientResponse<T> = AxiosResponse<T>;
export type ApiClientError<T> = AxiosError<T>;

export const apiClient = (): ApiClient => {
  const instance = axios.create({
    timeout: 20000,
    responseType: 'json',
  });

  return instance;
};
