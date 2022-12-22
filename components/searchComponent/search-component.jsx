import React from 'react'
import style from "./search-component.module.css"
export default function SearchBox() {

    return (
        <>
            <input className={style.searchBox} type="text" placeholder='Search Your Anime' />
        </>
    )
}
