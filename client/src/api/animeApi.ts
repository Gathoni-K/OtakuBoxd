/*
file where we create our api functions
*/
import { jikanClient } from './jikanClient';
import  type {
    AnimeDetailsResponse,
    AnimeListResponse,
    ReviewsResponse,
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
    const { data } = await jikanClient.get<AnimeDetailsResponse>(`/anime/${id}/full`);
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
    searchByName: async (query: string, limit?: number) => {
        const { data } = await jikanClient.get<AnimeListResponse>('/anime', {
            params: { q: query, limit },
        });
        return data;
    },

    //function to fetch anime reviews.
    getAnimeReviews: async (id: number, page: number = 1, preliminary?: boolean, spoilers?: string) => {
    const { data } = await jikanClient.get<ReviewsResponse>(`/anime/${id}/reviews`, {
        params: {page, preliminary, spoilers},
    });
    return data;
},
    
}