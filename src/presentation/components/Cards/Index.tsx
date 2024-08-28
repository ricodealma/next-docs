import { Card, CardContent } from "@mui/material";
import React, { ReactNode } from "react";
import Action from "./Card/Action";
import CardInfo from "./Card/Info";
import CardQrCode from "./Card/QrCode";
import ActiveId from "./Card/Info/ActiveId";
import Description from "./Card/Info/Description";
import Creation from "./Card/Info/Creation";
import Uri from "./Card/Info/Uri";
import Shortlink from "./Card/Info/Shortlink";
import Visibility from "./Card/Info/Visibility";
import DownloadButton from "./Card/Action/DownloadButton";
import EditButton from "./Card/Action/EditButton";

interface CardMultilinkProps {
  info?: ReactNode;
  qrCode?: ReactNode;
  actions?: ReactNode;
}
const CardMultilink = ({ info, qrCode, actions }: CardMultilinkProps) => {
  return (
    <Card sx={{ padding: 2, borderRadius: "8px" }}>
      <CardContent>
        {info}
        {qrCode}
        {actions}
      </CardContent>
    </Card>
  );
};

CardMultilink.Info = CardInfo;
CardMultilink.Actions = Action;
CardMultilink.QrCode = CardQrCode;
CardMultilink.InfoActiveId = ActiveId;
CardMultilink.InfoDescription = Description;
CardMultilink.InfoCreation = Creation;
CardMultilink.InfoUri = Uri;
CardMultilink.InfoShortlink = Shortlink;
CardMultilink.InfoVisibility = Visibility;
CardMultilink.ActionDownloadButton = DownloadButton;
CardMultilink.ActionEditButton = EditButton;

export default CardMultilink;
