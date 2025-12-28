/*
-Query hook for fetching current season anime
 */
import { useQuery } from "@tanstack/react-query";
import { animeApi } from "../api/animeApi";

export const useSeasonsNowAnime = (
    page: number = 1,
) => {
    return useQuery({
        queryKey: ["anime", "now", page],
        queryFn: () => animeApi.getSeasonsNowAnime(page),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    })
}