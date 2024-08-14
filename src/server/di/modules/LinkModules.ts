import { ILinkRepository } from "@/domain/aggregates/link/ILinkRepository";
import { LinkRepository } from "@/infrastructure/http/linkRepository";
import { ContainerModule, interfaces } from "inversify";
import { LinkUseCases } from "@/application/useCases/linkUseCases";
import { ILinkUseCases } from "@/application/useCases/ILinkUseCases";
import { DI_TYPES } from "../types";
import { IHttpClient } from "@/domain/seedWork/http/IHttpClient";
import { AxiosHttpClient } from "@/domain/seedWork/http/axiosHttpClient";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IHttpClient>(DI_TYPES.HttpClient).to(AxiosHttpClient).inSingletonScope();
  bind<string>(DI_TYPES.ApiBaseUrl).toConstantValue("http://localhost:3001");
  bind<ILinkRepository>(DI_TYPES.LinkRepository).to(LinkRepository);
  bind<ILinkUseCases>(DI_TYPES.LinkUseCases).to(LinkUseCases);
};

export const LinkModule = new ContainerModule(initializeModule);
