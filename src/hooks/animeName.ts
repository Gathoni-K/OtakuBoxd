/*
-Query hook for fetching list of anime by their name
-The hook:
1.fetches anime by name.
2.handle caching, loading, errors.
3.expose a clean API to components.

-Our hook does not fetch data, react query does.

*/

import { useQuery } from "@tanstack/react-query";
import { animeApi } from "../api/animeApi";

export const useAnimeName = (
    query: string,
    limit = 10,
    //setting our default
) => {
    return useQuery({
        queryKey: ["anime", "name", query, limit ],
        //here is what this data is
        queryFn: () => animeApi.searchByName(query, limit),
        //here is where it's coming from
        enabled: query.trim().length > 0,
        //this ensures our hook only runs when our query is not empty.
        /*
            -Always add the 'enabled' option when:
            1.the query depends on user input
            2.when we do not want the hook to run on render.
            3.the query parameter may be empty or null 
        */
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
};