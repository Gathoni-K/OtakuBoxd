/*
file where we create our api functions
*/
import { jikanClient } from './jikanClient';
import  type {
    AnimeDetails,
    AnimeListResponse,
} from "../types/anime.ts";

export const animeApi = {
    
    //function for getting the top anime
    getTopAnime: async (page: number = 1, type?: string) => {
        const { data } = await jikanClient.get<AnimeListResponse>('/top/anime', {
            params: {page, type},
        });
        return data;
    },

    //function for getting anime data
    getAnimeData: async (id: number) => {
        const { data } = await jikanClient.get<AnimeDetails>('/anime/{id}/full', {
            params: {id},
        });
        return data;
    }
}