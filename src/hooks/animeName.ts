/*
-Query hook for fetching list of anime by their name
*/

import { useQuery } from "@tanstack/react-query";
import { animeApi } from "../api/animeApi";

export const useAnimeName = (
    id: number,
) => {
    return useQuery({
        queryKey: ["anime", "name", id],
        queryFn: () => animeApi.getAnimeName(id),

        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    })
}