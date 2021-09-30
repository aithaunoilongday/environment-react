import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { instance } from 'Utils/Axios';

export const headerService = (params: number): AxiosPromise<string> => {
  const request: AxiosRequestConfig = {
    method: 'GET',
    url: '',
    params
  };
  return instance(request);
};
