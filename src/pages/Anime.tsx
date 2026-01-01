import SearchBar from "../components/ui/SearchBar";
import Layout from "../components/layout/Layout";
import AnimeGrid from "../components/sections/AnimeGrid";
import UpcomingAnimeGrid from "../components/sections/UpcomingAnimeGrid";
import { useState } from "react";
import type {Anime, AnimeDetails, AnimeListResponse } from "../types/anime";



const Anime = () => {

    const [name, setName ] = useState<string>("");
    const [searchResults, setSearchResults] = useState<AnimeListResponse>();
    const [selectedId, setSelectedId ] = useState<AnimeDetails>();

    function handleSearch(){

    }
    return (
        <Layout>
            <SearchBar />
            <AnimeGrid />

            <h2 className="flex justify-center items-center mt-4 md:mt-6 lg:mt-8
            tracking-wide underline text-3xl text-violet-700 dark:text-fuchsia-700
            shadow-lg">
                Upcoming Anime
            </h2>
            <UpcomingAnimeGrid />
            
        </Layout>
    )
}

export default Anime