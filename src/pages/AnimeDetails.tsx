/*
-Anime page showing the anime details
*/
import { useAnimeData } from "../hooks/animeData";
import AddButton from "../components/ui/AddButton";
import DeleteButton from "../components/ui/DeleteButton";

interface AnimeDetailsProps {
    id: number;
}

const AnimeDetails = ({ id }: AnimeDetailsProps) => {
    const { data, isLoading, isError, error } = useAnimeData(id);
    
    if(isLoading) {
        return <div>Loading anime data...</div>
    }
    
    if(isError) {
        return <div>Error: {(error as Error)?.message}</div>
    }
    
    // Since you're fetching a single anime, data.data is an object, not an array
    const animeData = data?.data;
    
    if (!animeData) {
        return <div>No anime data found</div>
    }
    
    return (
        <div>
        <h1 className="text-3xl font-bold mb-4">{animeData.title}</h1>
        <div className="flex gap-6">
            <img 
            src={animeData.images.jpg.image_url} 
            alt={animeData.title}
            className="rounded-lg w-64"
            />
            <div>
            <p><strong>Type:</strong> {animeData.type}</p>
            <p><strong>Episodes:</strong> {animeData.episodes || 'N/A'}</p>
            <p><strong>Score:</strong> {animeData.score}</p>
            <p><strong>Studios:</strong> {animeData.studios?.map(s => s.name).join(', ') || 'N/A'}</p>
            <p className="mt-4"><strong>Synopsis:</strong></p>
            <p className="text-gray-700 dark:text-gray-300">{animeData.synopsis}</p>
            </div>
        </div>

        {/* container for our add and delete buttons */}
        <div className="flex justify-end mt-4 md:mt-6 lg:mt-8 gap-6 md:gap-10
        flex-col md:flex-row">
            <AddButton />
            <DeleteButton />
        </div>

        </div>
    )
}

export default AnimeDetails