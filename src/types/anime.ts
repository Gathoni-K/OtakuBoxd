interface AnimeImageJPG{
    image_url: string;
}
interface AnimeImages {
    jpg: AnimeImageJPG;
}

export interface AnimeListResponse {
    data: Anime[];
    pagination?: {
        last_visible_page: number;
        has_next_page: boolean;
    };
}
/*
-When an API returns:
    a single item - Anime
    a list wrapped in an object - AnimeListResponse\
*/

export interface Anime {
    data: Anime[];
    mal_id: number;
    title: string;
    images: AnimeImages;
    status: string;
    popularity: number;
    score: number;
    type: string;
}


export interface AnimeDetails extends Anime{
    type: string;
    duration: string;
    rating: string;
    
}