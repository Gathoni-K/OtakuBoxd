import { createContext, useContext, useState } from "react";
import type { Anime } from "../types/anime";


interface WatchListContextType{
    watchList: Anime[];
    addToWatchlist: (anime: Anime) => void;
    removeFromWatchlist: (animeId: number) => void;
    isInWatchlist: (animeId: number) => boolean;

}

const WatchListContext = createContext<WatchListContextType | undefined>(undefined);

export const useWatchListContext = () => {
    const context = useContext(WatchListContext);

    if(!context) {
        throw new Error("WatchListContext must be used withing WatchListContext");
    }
    return context;

    const [watchList, setWatchlist] = useState<Anime[]>([]);

    //function to add anime to watchlist
    const addToWatchlist = (anime: Anime) => {
        setWatchlist(prev => {
            if (prev.some(item => item.mal_id === anime.mal_id)) {
                //checks if the anime to be added already exists in our array, 
                //if it does exist, we return the previous watchlist
                return prev;
            }
            const newWatchlist = [...prev, anime];
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
            //ensure our data is persistent
            return newWatchlist;
        });
    };
    const removeFromWatchlist = (animeId: number) => {
        setWatchlist(prev => {
            const newWatchlist = prev.filter(item => item.mal_id !== animeId);
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
            return newWatchlist;
        });
    };

    
}