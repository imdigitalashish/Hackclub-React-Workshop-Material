import React, { useContext } from 'react'
import { AnimeListContext } from '../../providers/animeProvider'
import MainScreenCard from './cardComponent';


import style from "./listviewcomponent.module.css";


export default function AllAnimeComponent() {


    // WE NEED ANIME LIST CONTEXT TO LOOP OVER AND SHOW CARDS



   // WE DON'T NEED ADD ANIME TO LIST HERE

    return (
        <div style={{ marginLeft: "90px" }}>
            <div className={style.container}>
             
                            {/* <MainScreenCard key={index} e={e} index={index} /> */}
                  
            </div>
        </div>
    )

}
