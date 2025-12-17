

const HeroSection = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8
        mt-6 md:mt-8 lg:mt-10 shadow-lg rounded-lg">

            {/* background image */}
            <div className="relative">
                <img src="/hunterxhunter.jpg"
                alt="hunterxhunter" 
                className="w-full h-full"
                />
            </div>

            {/* CTA buttons */}
            <div>
                <button
                className="px-4 py-2 rounded-lg bg-violet-800
                z-10 text-white"
                >
                    Browse Anime
                </button>
            </div>
            
        </div>
    )
}

export default HeroSection