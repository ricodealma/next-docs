import { Link } from "@/domain/aggregates/link/entities/link";
import { inject, injectable } from "inversify";
import type { ILinkRepository } from "src/server/domain/aggregates/link/ILinkRepository";
import { DI_TYPES } from "@/server/di/types";
import { ILinkUseCases } from "./ILinkUseCases";

@injectable()
export class LinkUseCases implements ILinkUseCases {
  constructor(
    @inject(DI_TYPES.LinkRepository)
    private readonly _linkRepository: ILinkRepository,
  ) {}

  createLink = (link: Link) => {
    return this._linkRepository.createLink(link);
  };

  deleteLink = (id: number) => {
    return this._linkRepository.deleteLink(id);
  };

  selectLinkById = (id: number) => {
    return this._linkRepository.selectLinkById(id);
  };

  updateLink = (link: Link) => {
    return this._linkRepository.updateLink(link);
  };
}
