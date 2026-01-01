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


export interface Anime {
    data: Anime[];
    mal_id: number;
    title: string;
    images: AnimeImages;
    status: string;
    popularity: number;
    score: number;
}


export interface AnimeDetails extends Anime{
    type: string;
    duration: string;
    rating: string;
    
}