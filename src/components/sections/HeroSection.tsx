import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8
        mt-6 md:mt-8 lg:mt-10 shadow-lg rounded-lg">

            {/* background image */}
            <div className="relative">
                <Carousel
                opts = {{
                    align: "start",
                    loop: true,
                    duration: 25,
                }}
                plugins={[
                    Autoplay({
                        delay:2500,
                    }),
                ]}
                className="w-full"
                >
                <CarouselContent>
                    <CarouselItem
                    className="flex items-center justify-center">
                        <img src="/DeathNote.jpg"
                        alt="Absolute Cinema-pi 1"
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover"
                        />
                    </CarouselItem>
                    <CarouselItem
                    className="flex items-center justify-center">
                        <img src="/hashira.jpg"
                        alt="Aura farmers"
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover"
                        />
                    </CarouselItem>
                    <CarouselItem
                    className="flex items-center justify-center">
                        <img src="/jjk.jpg"
                        alt="SatoSugu, ItaFushi, home of doomed yaoi"
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover"
                        />
                    </CarouselItem>
                    <CarouselItem
                    className="flex items-center justify-center">
                        <img src="/Monster.jpg"
                        alt="Absolute Cinema-pi 2"
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover"
                        />
                    </CarouselItem>
                    <CarouselItem
                    className="flex items-center justify-center">
                        <img src="/Totoro.jpg"
                        alt="Live, Love, Laugh Studio Ghibli!"
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover"
                        />
                    </CarouselItem>
                    <CarouselItem
                    className="flex items-center justify-center">
                        <img src="/AOT.jpg"
                        alt="Absolute Cinema-pi 3"
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover"
                        />
                    </CarouselItem>
                    <CarouselItem
                    className="flex items-center justify-center">
                        <img src="/chainsawMan.jpg"
                        alt="Absolute Cinema-pi 5"
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover"
                        />
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>


                {/* CTA buttons */}
            <div
            className="absolute bottom-4 right-8 z-10">
                <Link to="/anime"
                className="px-6 py-3 rounded-lg bg-violet-800 text-white hover:bg-blue-700 transition-colors
                cursor-pointer hover:scale-110"
                >
                    Browse Anime
                </Link>
            </div>

            </div>

            
        </div>
    )
}

export default HeroSection