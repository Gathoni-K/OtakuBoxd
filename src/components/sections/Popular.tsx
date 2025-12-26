import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel";
import { useTopAnime } from "../../hooks/topAnime.ts";



const Popular = () => {
    const { data, isLoading, isError, error } = useTopAnime(1, "tv");

    if (isLoading) {
        return <div>Loading Top Anime...</div>
    }
    if (isError) {
    return <div>Error: {(error as Error)?.message}</div>;
}


    const animeList = data?.data || [];
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8
        mt-6 md:mt-8 lg:mt-10 shadow-lg rounded-lg">

            <div
            className="flex items-center justify-center">
                {/* our section header */}
                <h2
                className="font-bold dark:text-fuchsia-600 text-violet-700 text-3xl">
                    Most Popular
                </h2>
            </div>

            <div>
                {/* carousel with most popular anime */}
            <Carousel>
            <CarouselContent>
                {animeList.map(anime => (
                    <CarouselItem key={anime.mal_id}>
                        <div className="anime-card">
                            <img
                            src={anime.images.jpg.image_url}
                            alt={anime.title}
                            className="anime-image"
                            />
                            <h3 className="anime-title">{anime.title}</h3>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

            </div>
        
        </div>
    )
}

export default Popular
