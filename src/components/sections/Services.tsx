const baseClassContainer = "border-2 rounded-md shadow-lg shadow-fuchsia-500 dark:shadow-blue-700"

const cards = [
    {
        id: 1,
        title: "Personalized Watchlists",
        description: "Create your own custom watchlist tailored to your taste, mood and current obsession"
    },
    {
        id: 2,
        title: "Anime Progress Tracking",
        description: "Keep track of what you are watching, how far you've reached, and pick up right where you left off"
    },
    {
        id: 3,
        title: "Completed Anime Library",
        description: "Mark anime you have finished and build your own personal archive of completed series",
    },
    {
        id: 4,
        title: "Community",
        description: "Connect with fellow otakus, share interests and discover anime through other fans"
    },
    {
        id: 5,
        title: "Anime Reviews and Ratings",
        description: "Write reviews, leave ratings and express your thoughts on the anime you have watched",
    },
]

const Services = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 md:mt-8 lg:mt-10 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map(card => (
                    <div
                        key={card.id}
                        className={`${baseClassContainer} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
                    >
                        <h3 className="text-violet-700 text-3xl font-bold mb-2 underline
                        dark:text-fuchsia-700">
                            {card.title}
                        </h3>
                        <p className="text-gray-900 dark:text-stone-100">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services