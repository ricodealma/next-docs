import { Link } from "@/domain/aggregates/link/entities/link";

export interface ILinkUseCases {
  createLink(link: Link): Promise<Link>;
  selectLinkById(id: number): Promise<Link>;
  updateLink(link: Link): Promise<Link>;
  deleteLink(id: number): Promise<boolean>;
}
