



import React, { useContext } from 'react'
import { AnimeListContext } from '../../providers/animeProvider';


import style from "./listviewcomponent.module.css";

export default function MainScreenCard(props) {


    const [animeList, setAnimeList] = useContext(AnimeListContext);




    let addItemToList = (index) => {
        let itemToAppend = animeList[index];
        itemToAppend["currentEpisode"] = 0;

         console.log(itemToAppend);
        let animeListDict = JSON.parse(localStorage.getItem("animeList"));
        animeListDict.push(itemToAppend);
        localStorage.setItem("animeList", JSON.stringify(animeListDict));

    }
    let { e, index } = props;


    return (
        <div className={style.card}>
            <div className={style.hiddenOverlay}>

                <h1 style={{ color: "white" }}>{e.title}</h1>
                <br /> <h2 style={{ color: "white" }}>{e.duration}</h2>

            </div>

            <div className="hiddenContent"></div>
            <img src={e.images.jpg.image_url} alt="" />
            <button onClick={() => addItemToList(index)}>Add to List</button>
        </div>
    )
}
