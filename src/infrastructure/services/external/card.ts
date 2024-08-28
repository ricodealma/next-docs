"use server";
import IUrl from "@/domain/aggregates/IUrl";

export const getCards = async (): Promise<IUrl[]> => {
  try {
    let data = await fetch("http://localhost:3001/url");
    const response = data.json();
    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
