import { Link, LinkSchema } from "@/domain/aggregates/link/entities/link";
import { ILinkRepository } from "@/domain/aggregates/link/ILinkRepository";
import { injectable, inject } from "inversify";
import { DI_TYPES } from "@/server/di/types";
import type { IHttpClient } from "@/domain/seedWork/http/IHttpClient";

@injectable()
export class LinkRepository implements ILinkRepository {
  constructor(
    @inject(DI_TYPES.HttpClient)
    private readonly _httpClient: IHttpClient,
    @inject(DI_TYPES.ApiBaseUrl)
    private readonly apiBaseUrl: string,
  ) {}

  async createLink(link: Link): Promise<Link> {
    return await this._httpClient
      .post(`${this.apiBaseUrl}/link`, link)
      .then((data) => LinkSchema.parse(data))
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  async deleteLink(id: number): Promise<boolean> {
    return await this._httpClient
      .delete<boolean>(`${this.apiBaseUrl}/link/${id}`)
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  async selectLinkById(id: number): Promise<Link> {
    return await this._httpClient
      .get(`${this.apiBaseUrl}/link/${id}`)
      .then((data) => LinkSchema.parse(data))
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  async updateLink(link: Link): Promise<Link> {
    return await this._httpClient
      .put(`${this.apiBaseUrl}/link`, link)
      .then((data) => LinkSchema.parse(data))
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
