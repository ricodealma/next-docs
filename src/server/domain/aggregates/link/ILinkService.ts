import { Link } from "@/domain/aggregates/link/entities/link";

export interface ILinkService {
  createLink(link: Link): Promise<Link>;
  selectLinkById(id: string): Promise<Link>;
  updateLink(link: Link): Promise<Link>;
  deleteLink(id: string): Promise<boolean>;
}
