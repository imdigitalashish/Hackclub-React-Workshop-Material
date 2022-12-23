import React, { useContext } from 'react'
import { AnimeListContext } from '../../providers/animeProvider'
import { animeAPI } from '../../providers/constants'
import style from "./search-component.module.css"
export default function SearchBox() {

    const [animeList, setAnimeList] = useContext(AnimeListContext);



    let handleKeyBoardEvent = (e) => {
        if (e.code === "Enter") {
            animeAPI.get(e.target.value)
                .then((res) => {
                    console.log(res.data.data);
                    setAnimeList(res.data.data)
                })
        }
    }


    return (
        <>
            <input onKeyDown={handleKeyBoardEvent} className={style.searchBox} type="text" placeholder='Search Your Anime' />
        </>
    )
}
