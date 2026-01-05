import SearchBar from "../components/ui/SearchBar";
import AnimeGrid from "../components/sections/AnimeGrid";
import UpcomingAnimeGrid from "../components/sections/UpcomingAnimeGrid";
import { useState } from "react";
import { useAnimeName } from "../hooks/animeName";
import AnimeDetails from "./AnimeDetails";

const Anime = () => {
    const [name, setName] = useState<string>("");
    const [selectedId, setSelectedId] = useState<number | null>(null);
    
    // Pass name state to the hook, not empty string!
    const { data, isLoading, isError, error } = useAnimeName(name);
    
    const searchResults = data?.data || [];
    
    // Handler for when user presses Enter
    const handleSearch = () => {
        // With React Query, we don't need to do anything here
        // The hook automatically refetches when 'name' changes
        console.log("Searching for:", name);
    };
    
    // Handler for selecting an anime from results
    const handleSelectAnime = (id: number) => {
        setSelectedId(id);
    };
    
    // Handler for clearing search
    const handleClearSearch = () => {
        setName("");
        setSelectedId(null);
    };

    return (
        <div>
        <SearchBar 
            name={name}
            setName={setName}
            onSearch={handleSearch}
        />
        
        {/* Show loading state */}
        {isLoading && (
            <div className="flex justify-center items-center p-8">
            <p className="text-lg">Loading anime...</p>
            </div>
        )}
        
        {/* Show error state */}
        {isError && (
            <div className="flex justify-center items-center p-8">
            <p className="text-red-500">Error: {(error as Error)?.message}</p>
            </div>
        )}
        
        {/* DEFAULT VIEW: Show random anime grid when no search */}
        {!isLoading && !isError && searchResults.length === 0 && !selectedId && (
            <>
            <AnimeGrid />
            <h2 className="flex justify-center items-center mt-4 md:mt-6 lg:mt-8 tracking-wide underline text-3xl text-violet-700 dark:text-fuchsia-700 shadow-lg">
                Upcoming Anime
            </h2>
            <UpcomingAnimeGrid />
            </>
        )}
        
        {/* SEARCH RESULTS VIEW: Show list of search results */}
        {!isLoading && !isError && searchResults.length > 0 && !selectedId && (
            <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Search Results</h2>
                <button 
                onClick={handleClearSearch}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                Clear Search
                </button>
            </div>
            
            <div className="space-y-4">
                {searchResults.map((anime) => (
                <div 
                    key={anime.mal_id}
                    onClick={() => handleSelectAnime(anime.mal_id)}
                    className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow
                    flex flex-row items-center gap-6"
                >
                    <img src={anime.images.jpg.image_url} alt={anime.title} 
                    className="rounded-lg"/>
                    <div>
                    <h3 className="text-xl font-semibold text-violet-900">{anime.title}</h3>
                    <p>Type: {anime.type}</p>
                    <p className="text-gray-600 dark: text-stone-500">Score: {anime.score}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        )}
        
        {/* SELECTED ANIME VIEW: Show full details when anime is selected */}
{selectedId && (
    <div className="container mx-auto px-4 py-6">
        <button 
        onClick={() => setSelectedId(null)}
        className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
        Back to Results
        </button>

        {/* Pass selectedId as a prop */}
        <AnimeDetails id={selectedId} />
    </div>
)}
        </div>
    );
    };

export default Anime;