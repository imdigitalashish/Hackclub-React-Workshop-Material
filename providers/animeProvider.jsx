import { createContext, useContext, useState } from "react";


export const AnimeListContext = createContext({});


export default function AnimeProvider({ children }) {
    const animeData = useContext(AnimeListContext);

    const [animeList, setAnimeList] = useState([]);


    const data = [animeList, setAnimeList];


    return (
        <AnimeListContext.Provider value={data}>
            {children}
        </AnimeListContext.Provider>
    )

}