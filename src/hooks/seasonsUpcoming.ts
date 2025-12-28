/*
Query hook for upcoming seasons
*/
import { useQuery } from "@tanstack/react-query";
import { animeApi } from "../api/animeApi";

export const useSeasonUpcoming = (
    page: number = 1,
    type?: string,
) => {
    return useQuery({
        queryKey: ["anime", "upcoming", page, type],
        queryFn: () => animeApi.getSeasonUpcoming(page, type),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    })
}