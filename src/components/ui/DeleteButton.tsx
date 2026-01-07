import { RiDeleteBin6Line } from "react-icons/ri";
import { useWatchList } from "../../contexts/WatchListContext";

interface DeleteButtonProps{
    animeId: number;
}

const DeleteButton = ({
    animeId,
}: DeleteButtonProps) => {

    const { removeFromWatchlist } = useWatchList();
    return (
        <div>
        <button
                onClick={() => removeFromWatchlist(animeId)}
                className="p-2 rounded-md inline-flex items-center
                font-medium justify-center transition-all duration-200 ease-in-out
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                shadow-lg border-blue-700 border-2 hover:scale-110
                cursor-pointer hover:bg-fuchsia-400 hover:text-violet-800"
                >
                    <RiDeleteBin6Line
                    className="text-3xl dark:text-stone-100"/>
                </button>
        
        </div>
    )
    }

export default DeleteButton
