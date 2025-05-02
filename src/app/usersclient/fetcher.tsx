// utils/fetcher.ts
import axios, { AxiosRequestConfig } from 'axios';

export async function fetcher<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await axios.get<T>(url, config);
  return response.data;
}