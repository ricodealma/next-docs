"use client";
import IUrl from "@/domain/aggregates/IUrl";
import { getCards } from "@/infrastructure/services/external/card";
import { useQuery } from "@tanstack/react-query";

export const useCards = () => {
  const { data, error, isLoading } = useQuery<IUrl[], Error>({
    queryKey: ["url"],
    queryFn: getCards,
  });

  return { data, error, isLoading };
};
