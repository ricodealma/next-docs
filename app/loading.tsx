import CardMultilink from "@/components/Cards/Index";
import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
    return (
        <Box my={50} mx={50}>
            <CardMultilink
                info={
                    <CardMultilink.Info>
                        <CardMultilink.InfoActiveId  />
                        <CardMultilink.InfoCreation/>
                        <CardMultilink.InfoShortlink/>
                        <CardMultilink.InfoDescription />
                        <CardMultilink.InfoVisibility/>
                        <CardMultilink.InfoUri />
                    </CardMultilink.Info>
                }
                qrCode={
                    <CardMultilink.QrCode
                        shortlink={`a`}
                    />
                }
                actions={
                    <CardMultilink.Actions>
                        <CardMultilink.ActionDownloadButton />
                        <CardMultilink.ActionEditButton />
                    </CardMultilink.Actions>
                }
            />
        </Box>
    );
};

export default Loading;
