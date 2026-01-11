// Journal.tsx
import ReviewGrid from "../components/sections/ReviewGrid";
import { useWatchList } from "../contexts/WatchListContext";

const Journal = () => {
    const { watchList } = useWatchList();
    
    if (watchList.length === 0) {
        return (
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-6 text-violet-700 dark:text-fuchsia-400 text-center">
                    Anime Reviews
                </h1>
                <div className="flex flex-col items-center justify-center p-8">
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                        Your watchlist is empty!
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Add anime to your watchlist to see their reviews here.
                    </p>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-8 text-violet-700 dark:text-fuchsia-400 text-center">
                Reviews from Your Watchlist
            </h1>
            
            <div className="space-y-12">
                {watchList.map(anime => (
                    <div key={anime.mal_id} className="border-b border-gray-300 dark:border-gray-700 pb-8">
                        {/* Anime Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <img 
                                src={anime.images.jpg.image_url}
                                alt={anime.title}
                                className="w-16 h-24 rounded object-cover"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-violet-900 dark:text-fuchsia-300">
                                    {anime.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {anime.type} • Score: {anime.score}
                                </p>
                            </div>
                        </div>
                        
                        {/* Reviews for this anime */}
                        <ReviewGrid id={anime.mal_id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Journal