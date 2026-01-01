/*
-Query hook for fetching anime data
*/

import { useQuery } from "@tanstack/react-query";
import { animeApi } from "../api/animeApi";

export const useAnimeData = (
    id: number,
) => {
    return useQuery({
        queryKey: ["anime", id],
        queryFn: () => animeApi.getAnimeData(id),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    })
}

