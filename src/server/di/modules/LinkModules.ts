import { ILinkRepository } from "@/domain/aggregates/link/ILinkRepository";
import { LinkRepository } from "@/infrastructure/external/linkRepository";
import { ContainerModule, interfaces } from "inversify";
import { DI_TYPES } from "../types";
import { IHttpClient } from "@/domain/seedWork/http/IHttpClient";
import { AxiosHttpClient } from "@/domain/seedWork/http/axiosHttpClient";
import { ILinkService } from "@/domain/aggregates/link/ILinkService";
import { LinkService } from "@/domain/aggregates/link/linkServices";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IHttpClient>(DI_TYPES.HttpClient).to(AxiosHttpClient).inSingletonScope();
  bind<string>(DI_TYPES.ApiBaseUrl).toConstantValue("http://localhost:3001");
  bind<ILinkRepository>(DI_TYPES.LinkRepository).to(LinkRepository).inRequestScope();
  bind<ILinkService>(DI_TYPES.LinkService).to(LinkService).inRequestScope();
};

export const LinkModule = new ContainerModule(initializeModule);
