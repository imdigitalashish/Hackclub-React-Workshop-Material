import React, { useContext } from 'react'
import { AnimeListContext } from '../../providers/animeProvider'
import MainScreenCard from './cardComponent';


import style from "./listviewcomponent.module.css";


export default function AllAnimeComponent() {

   const [animeList, setAnimeList] = useContext(AnimeListContext);




    let addItemToList = (index) => {
        let itemToAppend = animeList[index];
        itemToAppend["currentEpisode"] = 0;

         console.log(itemToAppend);
        let animeListDict = JSON.parse(localStorage.getItem("animeList"));
        animeListDict.push(itemToAppend);
        localStorage.setItem("animeList", JSON.stringify(animeListDict));

    }


    return (
        <div style={{ marginLeft: "90px" }}>
            <div className={style.container}>
                {
                    animeList.map((e, index) => {
                        return (
                            <MainScreenCard key={index} e={e} index={index} />
                        )
                    })
                }
            </div>
        </div>
    )

}
