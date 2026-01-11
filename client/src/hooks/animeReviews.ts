// Hook
/*
-Hook for fetching anime reviews.
*/
import { useQuery } from "@tanstack/react-query";
import { animeApi } from "../api/animeApi";

export const useAnimeReviews = (
    id: number,
    page: number = 1,
    preliminary?: boolean,
    spoilers?: string,
) => {
    return useQuery({
        queryKey: ["reviews", id, page, preliminary, spoilers],
        queryFn: () => animeApi.getAnimeReviews(id, page, preliminary, spoilers),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    })
}