// CompletedButton.tsx
/*
-On clicking this button, anime is added to completed section.
*/
import { IoMdAdd } from "react-icons/io";
import type { Anime } from "../../types/anime";

interface CompletedButtonProps {
    anime: Anime;
    onComplete: (anime: Anime) => void;
}

const CompletedButton = ({ anime, onComplete }: CompletedButtonProps) => {
    return (
        <div>
            <button 
                onClick={() => onComplete(anime)}
                className="p-2 rounded-md inline-flex items-center
                    font-medium justify-center transition-all duration-200 ease-in-out
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    shadow-lg border-blue-700 border-2 hover:scale-110
                    cursor-pointer hover:bg-fuchsia-400 hover:text-violet-800"
            >
                <IoMdAdd 
                    className="text-3xl dark:text-stone-100"/>
            </button>
        </div>
    )
}

export default CompletedButton