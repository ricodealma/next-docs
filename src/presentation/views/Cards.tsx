"use server";
import React, { Suspense } from "react";
import { Box } from "@mui/material";
import CardMultilink from "@/components/Cards/Index";
import IUrl from "@/domain/aggregates/IUrl";
import Loading from "app/loading";


const Cards = async () => {
    let data: IUrl[] = await fetch("http://localhost:3001/url")
        .then((res) => res.json())

    return (
        <Box my={50} mx={50}>
            <Suspense fallback={<Loading />}>
                {data.map((url) => (
                    <CardMultilink
                        key={url.id}
                        info={
                            <CardMultilink.Info>
                                <CardMultilink.InfoActiveId active={url.active} id={url.id} />
                                <CardMultilink.InfoCreation
                                    date={url.date}
                                    ownerEmail={url.ownerEmail}
                                />
                                <CardMultilink.InfoShortlink
                                    shortlink={`${url.domain.description}/${url.token}`}
                                />
                                <CardMultilink.InfoDescription description={url.description} />
                                <CardMultilink.InfoVisibility
                                    accessTypeId={url.accessType.id}
                                />
                                <CardMultilink.InfoUri uri={url.uri} />
                            </CardMultilink.Info>
                        }
                        qrCode={
                            <CardMultilink.QrCode
                                shortlink={`${url.domain.description}/${url.token}`}
                            />
                        }
                        actions={
                            <CardMultilink.Actions>
                                <CardMultilink.ActionDownloadButton />
                                <CardMultilink.ActionEditButton />
                            </CardMultilink.Actions>
                        }
                    />
                ))}
            </Suspense>
        </Box>
    );
};

export default Cards;
