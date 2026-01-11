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
    a list wrapped in an object - AnimeListResponse
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
    episodes: number;

}

export interface ReviewsResponse {
    data: Review[];
    pagination: Pagination;
}
export interface User {
    username: string;
    url: string;
    images: Images;
}
export interface Images {
    jpg: ImageFormat;
    webp: ImageFormat;
}

export interface ImageFormat {
    image_url: string;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
}
export interface Reactions {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
}

export interface Review {
    user: User;
    mal_id: number;
    url: string;
    type: string;
    reactions: Reactions;
    date: string; // ISO string
    review: string;
    score: number;
    tags: string[];
    is_spoiler: boolean;
    is_preliminary: boolean;
    episodes_watched: number;
}


export interface AnimeDetails extends Anime{
    type: string;
    duration: string;
    rating: string;
    synopsis: string;
    studios?: Array<{ name: string }>; 
    
}
export interface AnimeDetailsResponse {
    data: AnimeDetails;
}