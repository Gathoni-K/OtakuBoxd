/*
-Query hook for fetching top anime
*/
import { useQuery } from "@tanstack/react-query";
import { animeApi } from "../api/animeApi";


export const useTopAnime = (
    page: number = 1,
    type?: string,
) => {
    return useQuery({
        queryKey: ["anime", "top", page, type],
        queryFn: () => animeApi.getTopAnime(page, type),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    })
}