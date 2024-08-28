"use client";
import { Box } from "@mui/material";
import React from "react";
import QRCode from "react-qr-code";

const qrRef = React.createRef<HTMLDivElement>();
interface Props {
  shortlink: string;
}
const CardQrCode = ({ shortlink }: Props) => {
  return (
    <Box display={"flex"} justifyContent={"space-around"} my={4}>
      <div ref={qrRef}>
        <QRCode size={130} value={shortlink} />
      </div>
    </Box>
  );
};

export default CardQrCode;
