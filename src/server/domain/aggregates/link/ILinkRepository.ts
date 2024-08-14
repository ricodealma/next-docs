// /src/context/user/domain/UserRepository.ts
import { Link } from "./entities/link";

export interface ILinkRepository {
  createLink(link: Link): Promise<Link>;
  selectLinkById(id: number): Promise<Link>;
  updateLink(link: Link): Promise<Link>;
  deleteLink(id: number): Promise<boolean>;
}
