import { IHttpClient } from "@/domain/seedWork/http/IHttpClient";
import { DI_TYPES } from "@/server/di/types";
import axios, { AxiosInstance } from "axios";
import { injectable, inject } from "inversify";

@injectable()
export class AxiosHttpClient implements IHttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(@inject(DI_TYPES.ApiBaseUrl) private readonly baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async get<T>(url: string): Promise<T> {
    return this.axiosInstance.get(url).then((response) => response.data);
  }

  async post<T>(url: string, data?: any): Promise<T> {
    return this.axiosInstance.post(url, data).then((response) => response.data);
  }

  async put<T>(url: string, data?: any): Promise<T> {
    return this.axiosInstance.put(url, data).then((response) => response.data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.axiosInstance.delete(url).then((response) => response.data);
  }
}
