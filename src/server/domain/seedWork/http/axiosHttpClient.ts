import { IHttpClient } from "@/domain/seedWork/http/IHttpClient";
import { getInjection } from "@/server/di/container";
import { DI_TYPES } from "@/server/di/types";
import axios, { AxiosInstance } from "axios";

import { injectable } from "inversify";

const apiBaseUrl = getInjection<string>(DI_TYPES.ApiBaseUrl);
@injectable()
export class AxiosHttpClient implements IHttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: apiBaseUrl,
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
