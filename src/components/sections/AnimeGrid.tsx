import { useSeasonsNowAnime } from "../../hooks/seasonsNowAnime"

const AnimeGrid = () => {

    const { data, isLoading, isError, error } = useSeasonsNowAnime(1);

    if (isLoading) {
        return <div>Loading Anime in Current Season...</div>
    }
    if (isError) {
        return <div>Error: {(error as Error)?.message }</div>
    }

    const animeGrid = data?.data  || [];
    return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {animeGrid.map(anime => (
            <div key={anime.mal_id} className="p-4 border rounded-lg">
                <img 
                src={anime.images.jpg.image_url} 
                alt={anime.title}
                className="w-full h-64 object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold text-lg text-violet-700 dark:text-stone-100">{anime.title}</h3>
                <p className="text-sm text-gray-600">Score: {anime.score}</p>
            </div>
            ))}
        </div>
    </div>
    )
}

export default AnimeGrid
