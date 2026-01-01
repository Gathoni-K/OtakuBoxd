/*
file where we create our api functions
*/
import { jikanClient } from './jikanClient';
import  type {
    AnimeDetails,
    AnimeListResponse,
    Anime,
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
    const { data } = await jikanClient.get<AnimeDetails>(`/anime/${id}/full`);
    return data;
},
    //function for getting current anime
    getSeasonsNowAnime: async(page: number =1) => {
        const { data } = await jikanClient.get<AnimeListResponse>('/seasons/now', {
            params: {page},
        });
        console.log('Seasons now response:', data);
        return data;
    },

    //function for getting anime for upcoming seasons
    getSeasonUpcoming: async(page: number = 1, type?: string) => {
        const { data } = await jikanClient.get<AnimeListResponse>('/seasons/upcoming', {
            params: {page, type},
        });
        return data;
    },

    //function to search for anime
    getAnimeName: async(id: number) => {
        const { data } = await jikanClient.get<Anime>(`/anime/${id}`);
        return data;
    }
}