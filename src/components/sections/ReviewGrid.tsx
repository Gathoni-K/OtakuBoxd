import { useAnimeReviews } from "../../hooks/animeReviews";
import { useState } from "react";

interface ReviewGridProps {
    id: number;
}

const ReviewGrid = ({ id }: ReviewGridProps) => {
    const [page, setPage] = useState(1);
    
    const { data, isLoading, isError, error } = useAnimeReviews(id, page);
    
    if(isLoading){
        return <div className="flex justify-center items-center p-8">
            <p className="text-lg">Loading anime reviews...</p>
        </div>
    }
    
    if(isError){
        return <div className="flex justify-center items-center p-8">
            <p className="text-red-500">Error: {(error as Error)?.message}</p>
        </div>
    }
    
    const animeReviews = data?.data || [];
    
    if(animeReviews.length === 0){
        return <div className="flex justify-center items-center p-8">
            <p className="text-gray-500 dark:text-gray-400">No reviews yet for this anime.</p>
        </div>
    }
    
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
            <h2 className="text-3xl font-bold mb-6 text-violet-700 dark:text-fuchsia-400">
                Reviews
            </h2>
            
            <div className="space-y-6">
                {animeReviews.map(review => (
                    <div 
                        key={review.mal_id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 
                            shadow-md hover:shadow-xl transition-shadow duration-200"
                    >
                        {/* Reviewer Info */}
                        <div className="flex items-center gap-4 mb-4">
                            <img 
                                src={review.user.images.jpg.image_url}
                                alt={review.user.username}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-bold text-lg text-violet-900 dark:text-fuchsia-400">
                                    {review.user.username}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(review.date).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        
                        {/* Review Score */}
                        <div className="mb-4">
                            <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Score: {review.score}/10
                            </span>
                        </div>
                        
                        {/* Review Content */}
                        <div className="text-gray-700 dark:text-gray-300">
                            <p className="line-clamp-4">{review.review}</p>
                        </div>
                        
                        {/* Read More Link */}
                        <a 
                            href={review.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-600 dark:text-fuchsia-400 hover:underline mt-2 inline-block"
                        >
                            Read full review 
                        </a>
                        
                        {/* Reactions */}
                        <div className="flex gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>{review.reactions.overall}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination */}
            {data?.pagination && (
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={() => setPage(prev => Math.max(1, prev - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 
                            disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    
                    <span className="flex items-center px-4">
                        Page {page} of {data.pagination.last_visible_page}
                    </span>
                    
                    <button
                        onClick={() => setPage(prev => prev + 1)}
                        disabled={!data.pagination.has_next_page}
                        className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 
                            disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default ReviewGrid