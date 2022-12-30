import { createContext, useContext, useState } from "react";

// TODO: Create a Context here to share animeList data accross all components and wrap it in app.js file
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
