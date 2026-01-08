// Lists.tsx
import Watching from "../components/sections/Watching";
import Completed from "../components/sections/Completed";
import { useState } from "react";
import type { Anime } from "../types/anime";
import { useWatchList } from "../contexts/WatchListContext";

const Lists = () => {
    const [completedList, setCompletedList] = useState<Anime[]>([]);
    //state responsible for moving our anime from watching to completed section.
    const { removeFromWatchlist } = useWatchList();
    
    const completedAnime = (anime: Anime) => {
        removeFromWatchlist(anime.mal_id);
        setCompletedList(prev => [...prev, anime]);
    }
    
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Watching onComplete={completedAnime} />
            <Completed completedList={completedList} />
        </div>
    )
}

export default Lists