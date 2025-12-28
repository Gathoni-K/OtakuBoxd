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
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-8 lg:mt-10">
        <div className="flex items-center justify-center mb-6">
            <h2 className="font-bold dark:text-fuchsia-600 text-violet-700 text-3xl">
            Most Popular
            </h2>
        </div>

        <div className="relative px-12">
            <Carousel className="w-full">
            <CarouselContent className="-ml-4">
                {animeList.map(anime => (
                <CarouselItem key={anime.mal_id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="anime-card p-4">
                    <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        className="anime-image w-full h-auto rounded-lg"
                    />
                    <h3 className="anime-title mt-2 text-sm font-semibold dark:text-stone-50">{anime.title}</h3>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
            </Carousel>
        </div>
        </div>
    )
}

export default Popular
