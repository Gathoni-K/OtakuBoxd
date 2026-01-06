import { createContext, useContext, useState } from "react";
import type { Anime } from "../types/anime";
import type { ReactNode } from "react";


interface WatchListContextType{
    watchList: Anime[];
    addToWatchlist: (anime: Anime) => void;
    removeFromWatchlist: (animeId: number) => void;
    isInWatchlist: (animeId: number) => boolean;

}

const WatchListContext = createContext<WatchListContextType | undefined>(undefined);

export const WatchlistProvider = ( {children} : { children: ReactNode }) => {
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

    const isInWatchlist = (animeId: number) => {
        return watchList.some(item => item.mal_id === animeId);
    }

    return (
        <WatchListContext.Provider value={{ addToWatchlist, removeFromWatchlist, watchList, isInWatchlist}}>
                {children}
        </WatchListContext.Provider>
    );  
};

export const useWatchList = () => {
    const context = useContext(WatchListContext);
    if(!context){
        throw new Error('useWatchLIst must be used within WatchListProvider')
    }
    return context;
}