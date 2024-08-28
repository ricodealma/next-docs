import IAccessType from "./IAccessType";
import IDomain from "./IDomain";
import IQRCode from "./IQRCode";
import IRedirectDefault from "./IRedirectDefault";
import IRedirectType from "./IRedirectType";
import IShared from "./IShared";

export default interface IUrl {
  id: string;
  accessType: IAccessType;
  redirectType: IRedirectType;
  domain: IDomain;
  ownerId: string;
  ownerEmail: string;
  uri: string;
  token: string;
  shares: IShared[];
  redirectDefault: IRedirectDefault;
  qrCode: IQRCode;
  active: boolean;
  description: string;
  date: Date;
}
