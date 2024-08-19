import { Link } from "./entities/link";

export interface ILinkRepository {
  createLink(link: Link): Promise<Link>;
  selectLinkById(id: string): Promise<Link>;
  updateLink(link: Link): Promise<Link>;
  deleteLink(id: string): Promise<boolean>;
}
