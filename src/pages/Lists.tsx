import Watching from "../components/sections/Watching";
import Completed from "../components/sections/Completed";


const Lists = () => {
    return (
        <div
        className="container mx-auto px-4 md:px-6 lg:px-8
        grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Watching />
            <Completed />

        </div>
    )
}

export default Lists
