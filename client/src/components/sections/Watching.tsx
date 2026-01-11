// Watching.tsx - Update your existing component
/*
Section where anime is added directly on clicking the add button
*/
import { useWatchList } from "../../contexts/WatchListContext";
import DeleteButton from "../ui/DeleteButton";
import CompletedButton from "../ui/CompletedButton";
import type { Anime } from "../../types/anime";

interface WatchingProps {
    onComplete: (anime: Anime) => void;
}

const Watching = ({ onComplete }: WatchingProps) => {
    const { watchList } = useWatchList();
    
    if (watchList.length === 0) {
        return (
            <div className="container m-2 px-4 md:px-6 lg:px-8 shadow-lg rounded-lg">
                <div className="m-4">
                    <h1 className="text-3xl underline text-violet-700 dark:text-stone-100
                        flex items-center justify-center mb-2 md:mb-4 lg:mb-6">
                        Watching
                    </h1>
                </div>
                <div className="flex items-center justify-center p-8">
                    <p className="text-xl text-gray-500 dark:text-gray-400">
                        Your watchlist is empty! Start adding some anime.
                    </p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="container m-2 px-4 md:px-6 lg:px-8 shadow-lg rounded-lg">
            <div className="m-4">
                <h1 className="text-3xl underline text-violet-700 dark:text-stone-100
                    flex items-center justify-center mb-2 md:mb-4 lg:mb-6">
                    Watching
                </h1>
            </div>
            
            {/* Stack of horizontal cards */}
            <div className="space-y-4 pb-6">
                {watchList.map(anime => (
                    <div 
                        key={anime.mal_id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 
                            shadow-md hover:shadow-xl transition-shadow duration-200
                            flex flex-row gap-4 items-start"
                    >
                        {/* Image on the left */}
                        <img 
                            src={anime.images.jpg.image_url}
                            alt={anime.title} 
                            className="rounded-lg w-32 h-48 object-cover flex-shrink-0"
                        />
                        
                        {/* Content on the right */}
                        <div className="flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-xl mb-2 text-violet-900 dark:text-fuchsia-400">
                                    {anime.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Episodes:</strong> {anime.episodes || 'N/A'}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Score:</strong> {anime.score || 'N/A'}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Type:</strong> {anime.type || 'N/A'}
                                </p>
                            </div>
                            
                            {/* Buttons at bottom right */}
                            <div className="flex justify-end gap-2 mt-4">
                                <CompletedButton anime={anime} onComplete={onComplete} />
                                <DeleteButton animeId={anime.mal_id} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Watching;