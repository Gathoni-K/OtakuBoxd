interface SearchBarProps {
    name: string;
    setName: (value: string) => void; // ← Accepts string parameter
    onSearch: () => void;
}

const SearchBar = ({ name, setName, onSearch }: SearchBarProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
        onSearch(); 
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center p-4">
        <input
            type="text"
            placeholder="Search anime here"
            value={name} 
            //Must have value prop for controlled input
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            className="px-5 py-3 border border-gray-900 rounded-lg placeholder:italic text-base dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 shadow-md hover:shadow-lg transition-shadow dark:bg-stone-200 dark:placeholder-gray-600"
        />
        </div>
    );
};

export default SearchBar;